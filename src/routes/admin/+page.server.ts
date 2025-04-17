import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
    let loginState = cookies.get("loginState");

    if (!verifyLoginState(loginState)) {
        redirect(307, "/admin/login");
    } else {
        return { isAuthorized: true };
    }
};

// TODO: implement sophisticated logic for authenticate credentials.
function verifyLoginState(loginState: string | undefined): boolean {
    return loginState === "test-jwt-string";
}
