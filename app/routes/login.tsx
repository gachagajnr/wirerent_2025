import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import feathersClient from "~/utils/feathersClient";
import { Box, Heading, Stack, Text, Link } from "@chakra-ui/react";

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
  
};

export default function Login() {
    return (
 
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      p={4}
      data-state="open"
      _open={{
        animationName: "fade-in, scale-in",
        animationDuration: "300ms",
      }}
      _closed={{
        animationName: "fade-out, scale-out",
        animationDuration: "120ms",
      }}
    >
      <Stack>
        <Heading as="h1" size="3xl" textAlign="center" color="purple.600">
          Welcome Back
        </Heading>
        <LoginForm />

        <Text fontSize="sm" mt={3} textAlign="center">
          <Link color="purple.500" href="/forgot-password">
            Forgot your password?
          </Link>
        </Text>

        <Text fontSize="sm" textAlign="center">
          Don't have an account?{" "}
          <Link color="purple.500" href="/register">
            Register
          </Link>
        </Text>
      </Stack>
            </Box>
   )
}
