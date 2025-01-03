import { Form, useActionData, useNavigation } from "@remix-run/react";

import { Button, TextInput, Group, Box, Textarea } from "@mantine/core";
import { action } from "~/routes/app/route";
import { HiMail } from "react-icons/hi";

const MailForm = () => {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();

  return (
    <Box ta="start">
      <Form method="post">
        <TextInput
          name="Subject"
          withAsterisk
          type="text"
          label="Subject"
          placeholder="Subject"
          error={
            actionData?.errors?.subject ? (
              <em>{actionData?.errors.subject}</em>
            ) : null
          }
        />
        <Textarea
          name="message"
          placeholder="Message"
          label="Message"
          autosize
          leftSection={<HiMail />}
          minRows={2}
          error={
            actionData?.errors?.message ? (
              <em>{actionData?.errors.message}</em>
            ) : null
          }
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting" ? "Sending..." : "Send"}
          </Button>
        </Group>
      </Form>
    </Box>
  );
};

export default MailForm;
