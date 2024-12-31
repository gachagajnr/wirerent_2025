"use client";

import { HiLockClosed, HiMail } from "react-icons/hi";

import { login } from "~/lib/auth";

import { Box, Button, Checkbox, Group, TextInput } from "@mantine/core";
import { useForm } from "@mantine/form";

export default function LoginForm() {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      // password:(value)=>
    },
  });

  const handleSubmit = (values: typeof form.values) => {
    login(values);
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

        <TextInput
          withAsterisk
          label="Password"
          leftSection={<HiLockClosed />}
          placeholder="********"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />

        <Checkbox
          mt="md"
          label="I agree to sell my privacy"
          key={form.key("termsOfService")}
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Log in</Button>
        </Group>
      </form>
    </Box>
  );
}
