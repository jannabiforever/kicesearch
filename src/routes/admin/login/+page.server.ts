import type { Actions } from "../$types";

export const actions = {
    default: async ({ request, cookies }) => {
        let data = await request.formData();

        let username = data.get("username");
        let password = data.get("password");

        if (!(username && password)) {
            // unreachable!
            console.log(
                "username or password is not set, but it is not desirable."
            );
            return { successful: false };
        }

        if (isAuthenticated(username.toString(), password.toString())) {
            cookies.set("loginState", "test-jwt-string", { path: "/" });
            return { successful: true };
        } else {
            return { successful: false };
        }
    },
} satisfies Actions;

// TODO: implement sophisticated logic for authenticate credentials.
const isAuthenticated = (username: string, password: string) => {
    return username == "asdf" && password == "asdf";
};
