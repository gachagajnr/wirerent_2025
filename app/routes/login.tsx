import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import feathersClient from "~/utils/feathersClient";
import { Box, Title, Stack, Text, Anchor,   } from "@mantine/core";

import LoginForm from "~/components/forms/login";

export const loader: LoaderFunction = async ({ request }) => {
  try {
    // Get the token from the cookie/storage first
    const token = await feathersClient.authentication.getAccessToken();

    if (!token) {
      // If no token exists, allow access to login page
      return null;
    }

    // Try to reauthenticate with the token
    const res = await feathersClient.reAuthenticate();
    console.log("Authentication successful:", res);
    return redirect("/dashboard");
  } catch (error) {
    // Clear any invalid tokens
    await feathersClient.authentication.removeAccessToken();
    console.log("Authentication error:", error);
    return null;
  }
};

export const action: ActionFunction = async ({ request }) => {
  // Implement any action logic if needed
};

export default function Login() {
  return (
    <Box
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: "1rem",
      }}
    >
      <Box
        w={{ base: 400, sm: 400, lg: 500 }}
        py={{ base: "xs", sm: "md", lg: "xl" }}
        ta="center"
        mx="auto"
      >
      
          <Stack align="center">
            <Title order={1}>Welcome Back</Title>
            <LoginForm />

            <Text size="sm" mt="sm">
              <Anchor href="/forgot-password">Forgot your password?</Anchor>
            </Text>

            <Text size="sm">
              Don&apos;t have an account?{" "}
              <Anchor href="/register">Register</Anchor>
            </Text>
          </Stack>
     
      </Box>
    </Box>
  );
}
