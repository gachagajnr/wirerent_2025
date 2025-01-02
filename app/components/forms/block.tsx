import { Form } from "@remix-run/react";

import { HiPhone, HiLocationMarker, HiHome } from "react-icons/hi";

import { Button, TextInput, Group, SimpleGrid, Box } from "@mantine/core";

const BlockForm = () => {
  return (
    <Box maw={500} ta="start">
      <Form method="post">
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput name="name" withAsterisk label="Name" placeholder="Name" />

          <TextInput
            name="location"
            withAsterisk
            label="Location"
            leftSection={<HiLocationMarker />}
            placeholder="Town/City"
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
          />

          <TextInput
            name="floors"
            withAsterisk
            label="Total Floors"
            placeholder="Total no of floors"
          />
        </SimpleGrid>
        <TextInput
          name="contact_1"
          withAsterisk
          type="phone"
          label="Contact 1"
          leftSection={<HiPhone />}
          placeholder="07*******"
        />

        <TextInput
          name="contact_2"
          withAsterisk
          type="phone"
          label="Contact 2"
          leftSection={<HiPhone />}
          placeholder="07*******"
        />
        <TextInput
          name="contact_3"
          withAsterisk
          type="phone"
          label="Contact 3"
          leftSection={<HiPhone />}
          placeholder="07*******"
        />

        <Group justify="flex-end" mt="md">
          <Button type="submit">Submit</Button>
        </Group>
      </Form>
    </Box>
  );
};

export default BlockForm;
