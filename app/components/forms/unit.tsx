import { Form, useActionData, useNavigation } from "@remix-run/react";
import { HiCurrencyDollar } from "react-icons/hi";
import {
  Button,
  TextInput,
  Group,
  SimpleGrid,
  Box,
  Select,
  Textarea,
} from "@mantine/core";
import { action } from "~/routes/app/route";

export interface BlockData {
  _id: string;
  name: string;
  location: string;
  units: number;
  floors: number;
  contact_1?: number;
  contact_2?: number;
  contact_3?: number;
}

interface UnitFormProps {
  blocks: BlockData[];
}

const UnitForm = ({ blocks }: UnitFormProps) => {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();

  return (
    <Box maw={500} ta="start">
      <Form method="post">
        <Select
          name="blockId"
          label="Select Block"
          withAsterisk
          placeholder="Select/Search a block"
          data={blocks.map((block) => ({
            value: block._id.toString(),
            label: `${block.name} - ${block.location}`,
          }))}
          searchable
          error={
            actionData?.errors?.blockId ? (
              <em>{actionData?.errors.blockId}</em>
            ) : null
          }
        />

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput
            name="name"
            type="text"
            withAsterisk
            label="Unit Number"
            placeholder="Unit Number"
            error={
              actionData?.errors?.name ? (
                <em>{actionData?.errors.name}</em>
              ) : null
            }
          />

          <TextInput
            name="floor"
            withAsterisk
            label="Floor"
            type="number"
            placeholder="Floor"
            error={
              actionData?.errors?.floor ? (
                <em>{actionData?.errors.floor}</em>
              ) : null
            }
          />
        </SimpleGrid>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <Select
            name="type"
            label="Select House Type"
            placeholder="Choose house type"
            data={[
              { value: "single", label: "Single" },
              { value: "bedsitter", label: "Bedsitter" },
              { value: "one_bedroom", label: "One Bedroom" },
              { value: "two_bedroom", label: "Two Bedroom" },
              { value: "three_bedroom", label: "Three Bedroom" },
              { value: "four_bedroom", label: "Four Bedroom" },
              { value: "five_bedroom", label: "Five Bedroom" },
              { value: "six_bedroom", label: "Six Bedroom" },
            ]}
            error={
              actionData?.errors?.type ? (
                <em>{actionData?.errors.type}</em>
              ) : null
            }
            // You can also use `value` and `onChange` to manage the selected value
          />

          <TextInput
            name="rent"
            withAsterisk
            type="number"
            label="Rent Amount"
            leftSection={<HiCurrencyDollar />}
            placeholder="Rent Amount"
            error={
              actionData?.errors?.rent ? (
                <em>{actionData?.errors.rent}</em>
              ) : null
            }
          />
        </SimpleGrid>
        <Textarea
          name="amenities"
          placeholder="Amenities"
          label="Amenities"
          autosize
          minRows={2}
          error={
            actionData?.errors?.amenities ? (
              <em>{actionData?.errors.amenities}</em>
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

export default UnitForm;
