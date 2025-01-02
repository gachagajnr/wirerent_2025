import { Form, useActionData, useNavigation } from "@remix-run/react";

import { HiPhone, HiLocationMarker, HiHome } from "react-icons/hi";

import { Button, TextInput, Group, SimpleGrid, Box } from "@mantine/core";

const BlockForm = () => {
  const navigation = useNavigation();

  const actionData = useActionData<typeof action>();

  return (
    <Box maw={500} ta="start">
      {/* {actionData?.error && (
        <div className="text-red-600 p-2 bg-red-100 rounded mb-4">
          {actionData.error}
        </div>
      )} */}
      <Form method="post">
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput
            name="name"
            type="text"
            withAsterisk
            label="Name"
            placeholder="Name"
            error={
              actionData?.errors?.name ? (
                <em>{actionData?.errors.name}</em>
              ) : null
            }
          />

          <TextInput
            name="location"
            withAsterisk
            label="Location"
            type="text"
            leftSection={<HiLocationMarker />}
            placeholder="Town/City"
            error={
              actionData?.errors?.location ? (
                <em>{actionData?.errors.location}</em>
              ) : null
            }
          />
        </SimpleGrid>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput
            withAsterisk
            name="units"
            type="number"
            label="Total Units"
            leftSection={<HiHome />}
            placeholder="Total no of units"
            error={
              actionData?.errors?.units ? (
                <em>{actionData?.errors.units}</em>
              ) : null
            }
          />

          <TextInput
            name="floors"
            withAsterisk
            label="Total Floors"
            placeholder="Total no of floors"
            error={
              actionData?.errors?.floors ? (
                <em>{actionData?.errors.floors}</em>
              ) : null
            }
          />
        </SimpleGrid>
        <TextInput
          name="contact_1"
          withAsterisk
          type="phone"
          label="Contact 1"
          leftSection={<HiPhone />}
          placeholder="07*******"
          error={
            actionData?.errors?.contact_1 ? (
              <em>{actionData?.errors.contact_1}</em>
            ) : null
          }
        />

        <TextInput
          name="contact_2"
          withAsterisk
          type="phone"
          label="Contact 2"
          leftSection={<HiPhone />}
          placeholder="07*******"
          error={
            actionData?.errors?.contact_2 ? (
              <em>{actionData?.errors.contact_2}</em>
            ) : null
          }
        />
        <TextInput
          name="contact_3"
          withAsterisk
          type="phone"
          label="Contact 3"
          leftSection={<HiPhone />}
          placeholder="07*******"
          error={
            actionData?.errors?.contact_3 ? (
              <em>{actionData?.errors.contact_3}</em>
            ) : null
          }
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit" disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting" ? "Creating..." : "Create"}
          </Button>
        </Group>
      </Form>
    </Box>
  );
};

export default BlockForm;
