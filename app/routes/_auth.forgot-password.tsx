import ForgotPasswordForm from "~/components/forms/forgot-password";
import { Box, Stack, Title, Text, Anchor, Container } from "@mantine/core";
import { Link } from "@remix-run/react";

export default function ForgotPassword() {
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
      <Container size="xs">
        <Stack align="center">
          <Link to="/">
            <img
              src="/arr.png"
              width={800}
              height={800}
              alt="AroundHS"
              className="h-16 w-auto object-contain"
            />
          </Link>
          <Title order={1}>Reset password</Title>
          <ForgotPasswordForm />

          <Text size="sm">
            Already have an account? <Anchor href="/login">Log in</Anchor>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
