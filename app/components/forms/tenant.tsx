import { Form, useActionData, useNavigation } from "@remix-run/react";
import { HiDocument, HiUser } from "react-icons/hi";
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
import { useState } from "react";
import { UnitData } from "../unit/unit";

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

const TenantForm = ({ blocks }: UnitFormProps) => {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  const [selectedBlockId, setSelectedBlockId] = useState<string | null>(null);

  const selectedBlock = blocks.find((block) => block._id === selectedBlockId);
  const units = selectedBlock?.units || [];

  return (
    <Box maw={500} ta="start">
      <Form method="post">
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
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
            value={selectedBlockId}
            onChange={(value) => setSelectedBlockId(value)}
            error={
              actionData?.errors?.blockId ? (
                <em>{actionData?.errors.blockId}</em>
              ) : null
            }
          />
          {selectedBlockId && (
            <Select
              name="unitId"
              label="Select Unit"
              withAsterisk
              placeholder="Select/Search a unit"
              data={
                Array.isArray(units)
                  ? units.map((unit: UnitData) => ({
                      value: unit._id ? unit._id.toString() : "",
                      label: `${unit.name} - ${unit.type} - KES ${unit.rent}`,
                    }))
                  : []
              }
              searchable
              error={
                actionData?.errors?.unitId ? (
                  <em>{actionData?.errors.unitId}</em>
                ) : null
              }
            />
          )}
        </SimpleGrid>
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput
            name="firstName"
            withAsterisk
            label="First name"
            leftSection={<HiUser />}
            placeholder="First name"
          />

          <TextInput
            name="lastName"
            withAsterisk
            label="Last name"
            leftSection={<HiUser />}
            placeholder="Last name"
          />
        </SimpleGrid>
        <TextInput
          name="idNumber"
          withAsterisk
          label="ID Number"
          leftSection={<HiDocument />}
          placeholder="ID Number"
        />
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput
            name="phone"
            type="number"
            withAsterisk
            label="Phone number"
            placeholder="Phone number"
            error={
              actionData?.errors?.name ? (
                <em>{actionData?.errors.name}</em>
              ) : null
            }
          />

          <TextInput
            name="email"
            withAsterisk
            label="Email address"
            type="email"
            placeholder="Email address"
            error={
              actionData?.errors?.floor ? (
                <em>{actionData?.errors.floor}</em>
              ) : null
            }
          />
        </SimpleGrid>
        <TextInput
          name="paymentDue"
          type="number"
          label="Rent Due Date"
          placeholder="Rent Due Date"
        />
        <Textarea
          name="notes"
          placeholder="Notes"
          label="Notes"
          autosize
          minRows={2}
          error={
            actionData?.errors?.notes ? (
              <em>{actionData?.errors.notes}</em>
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

export default TenantForm;
