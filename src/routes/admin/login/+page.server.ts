import type { Actions } from "../$types";
import { ADMIN_USERNAME, ADMIN_PASSWORD } from "$env/static/private";
import { redirect } from "@sveltejs/kit";
import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = async ({ cookies }) => {
  let loginState = cookies.get("loginState");
  if (loginState && isAuthenticatedJwt(loginState)) {
    return redirect(302, "/admin");
  }
};

export const actions = {
  default: async ({ request, cookies }) => {
    let data = await request.formData();

    let username = data.get("username");
    let password = data.get("password");

    if (!(username && password)) {
      console.log("username or password is not set.");
      return { successful: false };
    }

    if (isAuthenticatedCredentials(username.toString(), password.toString())) {
      cookies.set("loginState", "test-jwt-string", { path: "/" });
      return redirect(302, "/admin");
    } else {
      return { successful: false };
    }
  },
} satisfies Actions;

// TODO: implement sophisticated logic for authenticate credentials.
const isAuthenticatedCredentials = (username: string, password: string) => {
  return username == ADMIN_USERNAME && password == ADMIN_PASSWORD;
};

const isAuthenticatedJwt = (token: string) => {
  return token === "test-jwt-string";
};
