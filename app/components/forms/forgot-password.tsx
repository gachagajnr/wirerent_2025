"use client";
import { HiMail } from "react-icons/hi";

import { resetPassword } from "~/lib/auth";

import { Button, Group, TextInput, Box } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function ForgotPasswordForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      // password:(value)=>
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    resetPassword(values);
  };

  return (
    <Box miw={300} ta="start">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          withAsterisk
          label="Email"
          leftSection={<HiMail />}
          placeholder="your@email.com"
          key={form.key("email")}
          {...form.getInputProps("email")}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Reset Password</Button>
        </Group>
      </form>
    </Box>
  );
}
