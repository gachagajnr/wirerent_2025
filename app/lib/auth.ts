import feathersClient, { users } from "~/utils/feathersClient";

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
    const response = await users.create(data);
    return response
    } catch (error) {
    console.error("Create account error:", error);

    throw error
    }
}

export const logout = async () => {
  await feathersClient.logout();
};


