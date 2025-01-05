import { Form } from "@remix-run/react";

import { HiMail, HiPhone, HiUser } from "react-icons/hi";

import {
  Button,
  TextInput,
  Group,
  SimpleGrid,
  Box,
  Textarea,
} from "@mantine/core";

const ContactForm = () => {
  return (
    <Box  ta="start">
      <TextInput
        withAsterisk
        name="name"
        type="name"
        label="Full Name"
        leftSection={<HiUser />}
        placeholder=" "
      />
      <Form method="post">
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
          name="subject"
          withAsterisk
          label="Subject"
          placeholder="Subject"
        />
        <Textarea
          name="message"
          withAsterisk
          label="Message"
          placeholder="Type your message"
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Send</Button>
        </Group>
      </Form>
    </Box>
  );
};

export default ContactForm;
