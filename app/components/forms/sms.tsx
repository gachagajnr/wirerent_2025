import { Form, useActionData, useNavigation } from "@remix-run/react";

import { Button,  Group, Box, Textarea } from "@mantine/core";
import { action } from "~/routes/app/route";
import { HiChat } from "react-icons/hi";

const SmsForm = () => {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();

  return (
    <Box ta="start">
      <Form method="post">
        <Textarea
          name="message"
          placeholder="Message"
          label="Message"
          leftSection={<HiChat/>}
          autosize
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

export default SmsForm;
