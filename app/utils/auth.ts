import feathersClient from "./feathersClient";
import { redirect } from "@remix-run/node";

export async function isAuthenticated(request: Request) {
  try {
    await feathersClient.reAuthenticate();
    return true;
  } catch {
    return false;
  }
}

export async function getUser() {
  try {
    const auth = await feathersClient.reAuthenticate();
    console.log("auth",auth)
    return auth.user;
  } catch (e) {
    console.log("auth error",e)

    return null;
  }
}

export const login = async (email:string, password:string) => {
  try {
    const response = await feathersClient.authenticate({
      strategy: "local",
      email,
      password,
    });
    return response;
  } catch (error) {
    console.error("Login error:", error);
    throw error;
  }
};


export const createAccount =async (data:Object) => {
    try {
    // const response = await users.create(data);
    // return response
    } catch (error) {
    console.error("Create account error:", error);

    throw error
    }
}

export const logout = async () => {
  await feathersClient.logout();
};

export async function requireAuth() {
  try {
    const auth = await feathersClient.reAuthenticate();
    return auth.user;
  } catch (error) {
    throw redirect("/login");
  }
}

