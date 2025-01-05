import { Form } from "@remix-run/react";

import { HiLockClosed, HiMail, HiPhone, HiUser, } from "react-icons/hi";

import {
  Button,
  TextInput,
  Checkbox,
  Group,
  SimpleGrid,
  Box,
} from "@mantine/core";

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  return (
    <Box miw={300} ta="start">
      <Form method="post">
        <TextInput
          name="name"
          withAsterisk
          label="Full name"
          leftSection={<HiUser />}
          placeholder="wen joe"
        />

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput
            withAsterisk
            name="email"
            type="email"
            label="Email"
            leftSection={<HiMail />}
            placeholder="your@email.com"
          />

          <TextInput
            name="phone"
            withAsterisk
            label="Phone Number"
            leftSection={<HiPhone />}
            placeholder="07******"
          />
        </SimpleGrid>
        <TextInput
          name="password"
          withAsterisk
          type="password"
          label="Password"
          leftSection={<HiMail />}
          placeholder="********"
        />

        <TextInput
          name="confirmPassword"
          type="password"
          withAsterisk
          label="Confirm Password"
          leftSection={<HiLockClosed />}
          placeholder="********"
        />
        <Checkbox
          name="termsOfService"
          mt="md"
          label="I agree to terms and conditions"
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Sign up</Button>
        </Group>
      </Form>
    </Box>
  );
};

export default RegisterForm;
