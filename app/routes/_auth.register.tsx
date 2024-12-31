import { ActionFunction, redirect } from "@remix-run/node";
import bcrypt from "bcrypt";
import RegisterForm from "~/components/forms/register";
import { Box, Stack, Title, Text, Anchor, Container } from "@mantine/core";
import { authenticator } from "~/utils/auth.server";
import { connectToDatabase } from "~/utils/db.server";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const email = form.get("email") as string;
  const password = form.get("password") as string;
  const name = form.get("name") as string;
  const website = form.get("website") as string;
  const phone = form.get("phone") as string;
  console.log("EMAILS IS", email, password);

  const salt = await bcrypt.genSalt(10);
  const hashedPassword = await bcrypt.hash(password, salt);

  const data = {
    email: email,
    password: hashedPassword,
    phone: phone,
    name: name,
    website: website,
  };

  const { db } = await connectToDatabase();

  try {
    const result = await db.collection("users").insertOne(data);
    if (!result.acknowledged) {
      return redirect("/register?error=Failed+to+create+user");
    }

    console.log("User successfully created:", data);

    // Authenticate the user (if needed)
    return await authenticator.authenticate("form", request, {
      successRedirect: "/app",
      failureRedirect: "/login",
      context: { formData: form },
    });
  } catch (error) {
    console.error("Error in action function:", error);
    return redirect("/register?error=Something+went+wrong");
  }
  
};

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
