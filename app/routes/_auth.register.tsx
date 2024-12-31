import RegisterForm from "~/components/forms/register";
import { Box, Stack, Title, Text, Anchor, Container } from "@mantine/core";

export default function Register() {
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
          <Title order={1}>Create an account</Title>
          <RegisterForm />

          <Text size="sm" mt="sm">
            <Anchor href="/forgot-password">Forgot your password?</Anchor>
          </Text>

          <Text size="sm">
            Already have an account? <Anchor href="/login">Log in</Anchor>
          </Text>
        </Stack>
      </Container>
    </Box>
  );
}
