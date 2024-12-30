 
import ForgotPasswordForm from "@/components/forms/forgot-password";
import { Box, Heading, Stack, Text, Link } from "@chakra-ui/react";

export default function ForgotPassword() {
  return (
    <Box
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
        <Heading as="h1" size="xl"  textAlign="center" color="purple.600">
          Reset Password
        </Heading>
        <ForgotPasswordForm />

        

        <Text fontSize="sm" mt={4} textAlign="center">
          Already have an account?{" "}
          <Link color="purple.500" href="/login">
            Sign in
          </Link>
        </Text>
      </Stack>
    </Box>
  );
}
