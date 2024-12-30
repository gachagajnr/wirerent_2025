import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { json } from "@remix-run/node";
import feathersClient from "~/utils/feathersClient";
import { Box, Heading, Stack, Text, Link } from "@chakra-ui/react";

import LoginForm from "~/components/forms/login";
 
export const loader: LoaderFunction = async ({ request }) => {
   try {
    await feathersClient.reAuthenticate();
    return redirect("/dashboard"); 
  } catch (error) {
    return null;  
  }
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;

  try {
    const response = await feathersClient.authenticate({
      strategy: "local",
      email,
      password,
    });
    return redirect("/dashboard");
  } catch (error) {
    return json({ error: "Invalid login credentials" }, { status: 401 });
  }
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
