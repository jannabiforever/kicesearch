import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";
import type { Actions } from "../$types";
import { getMeiliSearchInstance } from "$lib/ms.server";

export const load: PageServerLoad = async ({ cookies }) => {
    let loginState = cookies.get("loginState");

    if (!verifyLoginState(loginState)) {
        redirect(307, "/admin/login");
    } else {
        return { isAuthorized: true };
    }
};

export const actions = {
    default: async ({ request }) => {
        let msInstance = await getMeiliSearchInstance();
        let result = await msInstance
            .addDocuments([])
            .then((enqueuedTask) => enqueuedTask.status);

        return {
            result: result,
        };
    },
} satisfies Actions;

// TODO: implement sophisticated logic for authenticate credentials.
function verifyLoginState(loginState: string | undefined): boolean {
    return loginState === "test-jwt-string";
}
