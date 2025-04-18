import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Actions } from "../$types";
import { dumpMeiliSearch, getMeiliSearchInstance } from "$lib/ms.server";
import {
    formatProblemId,
    type Category,
    type KiceMonth,
    type KiceYear,
} from "$lib/problem";

export const load: PageServerLoad = async ({ cookies }) => {
    let loginState = cookies.get("loginState");

    if (!verifyLoginState(loginState)) {
        redirect(307, "/admin/login");
    }
};

export const actions = {
    postData: async ({ request }) => {
        let formData = await request.formData();

        let year = formData.get("year")?.toString();
        let month = formData.get("month")?.toString();
        let index = Number(formData.get("index"));
        let category = formData.get("category")?.toString();
        let point = formData.get("point")?.toString();
        let body = formData.get("body")?.toString();

        if (year && month && category && point && body) {
            let id = formatProblemId(
                year as KiceYear,
                month as KiceMonth,
                category as Category,
                index
            );
            let msInstance = await getMeiliSearchInstance();
            let result = await msInstance
                .addDocuments([
                    {
                        id,
                        year,
                        category,
                        point,
                        body,
                    },
                ])
                .then((enqueuedTask) => enqueuedTask.status);

            return {
                result: result,
                formData: {
                    year,
                    month,
                    category,
                    point,
                    body,
                },
            };
        }

        return {
            result: "invalid",
            formData: {
                year,
                month,
                category,
                point,
                body,
            },
        };
    },

    initialize_ms_server: async () => {
        await dumpMeiliSearch();

        let instance = await getMeiliSearchInstance();

        await instance.deleteAllDocuments();

        await instance.updateFilterableAttributes([
            "year",
            "month",
            "point",
            "category",
        ]);

        return {
            successful: true,
        };
    },
} satisfies Actions;

// TODO: implement sophisticated logic for authenticate credentials.
function verifyLoginState(loginState: string | undefined): boolean {
    return loginState === "test-jwt-string";
}
