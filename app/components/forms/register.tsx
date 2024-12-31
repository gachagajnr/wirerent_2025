"use client";
import { useForm } from "@mantine/form";
import { HiLockClosed, HiMail, HiPhone, HiUser, HiGlobe } from "react-icons/hi";

import {
  Button,
  TextInput,
  Checkbox,
  Group,
  SimpleGrid,
  Box,
} from "@mantine/core";
import { createAccount } from "~/lib/auth";

interface RegisterFormProps {}

const RegisterForm: React.FC<RegisterFormProps> = () => {
  const form = useForm({
    mode: "uncontrolled",
    initialValues: {
      email: "",
      password: "",
      phoneNumber: "",
      website: "",
      fullName: "",
      confirmPassword: "",
      termsOfService: false,
    },

    validate: {
      email: (value) => (/^\S+@\S+$/.test(value) ? null : "Invalid email"),
      // password:(value)=>
    },
  });
  const handleSubmit = (values: typeof form.values) => {
    createAccount(values);
  };

  // const onSubmit = async(data: any) => {

  //   const body = {
  //     "email": data.email,
  //     "password": data.password,
  //     "phoneNumber":data.phoneNumber
  //   }
  //   try {
  //     const response = await createAccount(body);
  //     console.log("REGISTER RESPONSE",response)

  //   } catch (e) {
  //           console.log("REGISTER ERROR", e);

  //   }
  // };

  return (
    <Box miw={300} ta="start">
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput
            withAsterisk
            label="Full name"
            leftSection={<HiUser />}
            placeholder="wen joe"
            key={form.key("fullName")}
            {...form.getInputProps("fullName")}
          />

          <TextInput
            withAsterisk
            label="Website"
            leftSection={<HiGlobe />}
            placeholder="yourdomain.com"
            key={form.key("website")}
            {...form.getInputProps("website")}
          />
        </SimpleGrid>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
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
            label="Phone Number"
            leftSection={<HiPhone />}
            placeholder="07******"
            key={form.key("phone")}
            {...form.getInputProps("phone")}
          />
        </SimpleGrid>
        <TextInput
          withAsterisk
          label="Password"
          leftSection={<HiMail />}
          placeholder="********"
          key={form.key("password")}
          {...form.getInputProps("password")}
        />

        <TextInput
          withAsterisk
          label="Confirm Password"
          leftSection={<HiLockClosed />}
          placeholder="********"
          key={form.key("confirmPassword")}
          {...form.getInputProps("confirmPassword")}
        />
        <Checkbox
          mt="md"
          label="I agree to terms and conditions"
          key={form.key("termsOfService")}
          {...form.getInputProps("termsOfService", { type: "checkbox" })}
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Register</Button>
        </Group>
      </form>
    </Box>
  );
};

export default RegisterForm;
