import feathersClient, { users } from "~/utils/feathersClient";

export const login = async (data: Record<string, unknown>) => {
  const { email, password } = data;
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

export const createAccount = async (data: object) => {
  try {
    const response = await users.create(data);
    return response;
  } catch (error) {
    console.error("Create account error:", error);

    throw error;
  }
};

export const logout = async () => {
  await feathersClient.logout();
};

export const resetPassword = (data: Record<string, unknown>) => {
  console.log(data);
};
