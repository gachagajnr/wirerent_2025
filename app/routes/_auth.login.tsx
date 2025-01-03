import { ActionFunction, LoaderFunction } from "@remix-run/node";
import { Box, Title, Stack, Text, Anchor } from "@mantine/core";
import { authenticator } from "~/utils/auth.server";

import LoginForm from "~/components/forms/login";

export const loader: LoaderFunction = async ({ request }) => {
  return await authenticator.isAuthenticated(request, {
    successRedirect: "/app",
  });
};

export const action: ActionFunction = async ({ request }) => {
  return await authenticator.authenticate("form", request, {
    successRedirect: "/app",
    failureRedirect: "/login",
  });
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
          <a href="/auth/google">Login with Google</a>

          <Text size="sm" mt="sm">
            <Anchor href="/forgot-password">Forgot your password?</Anchor>
          </Text>

          <Text size="sm">
            Don&apos;t have an account?{" "}
            <Anchor href="/register">Sign up</Anchor>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
