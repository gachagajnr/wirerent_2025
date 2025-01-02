"use client";
import { HiMail } from "react-icons/hi";

import { Button, Group, TextInput, Box } from "@mantine/core";
 
export default function ForgotPasswordForm() {
  return (
    <Box miw={300} ta="start">
      <form method="post">
        <TextInput
          withAsterisk
          label="Email"
          name="email"
          leftSection={<HiMail />}
          placeholder="your@email.com"
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Reset Password</Button>
        </Group>
      </form>
    </Box>
  );
}
