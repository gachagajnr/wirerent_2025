import { HiLockClosed, HiMail } from "react-icons/hi";

import { Box, Button, Checkbox, Group, TextInput } from "@mantine/core";
import { Form } from "@remix-run/react";

export default function LoginForm() {
  return (
    <Box miw={300} ta="start">
      <Form method="post">
        <TextInput
          name="email"
          type="email"
          withAsterisk
          label="Email"
          leftSection={<HiMail />}
          placeholder="your@email.com"
        />

        <TextInput
          name="password"
          type="password"
          withAsterisk
          label="Password"
          leftSection={<HiLockClosed />}
          placeholder="********"
        />

        <Checkbox mt="md" label="I agree to sell my privacy" />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Log in</Button>
        </Group>
      </Form>
    </Box>
  );
}
