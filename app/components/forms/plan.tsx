import { Form, useActionData, useNavigation } from "@remix-run/react";

import { HiCurrencyDollar, HiMinusCircle, HiPlusCircle } from "react-icons/hi";

import {
  Button,
  TextInput,
  Group,
  Box,
  Textarea,
  SimpleGrid,
} from "@mantine/core";
import { action } from "~/routes/app/route";
import { useState } from "react";

const PlanForm = () => {
  const navigation = useNavigation();

  const actionData = useActionData<typeof action>();
  const [addons, setAddons] = useState([{ id: Date.now(), value: "" }]);

  const handleAddAddon = () => {
    setAddons([...addons, { id: Date.now(), value: "" }]);
  };

  const handleRemoveAddon = (id: number) => {
    setAddons(addons.filter((addon) => addon.id !== id));
  };

  const handleAddonChange = (id: number, value: string) => {
    setAddons(
      addons.map((addon) => (addon.id === id ? { ...addon, value } : addon))
    );
  };
  return (
    <Box maw={500} ta="start">
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
            label="Package Name"
            placeholder="Package Name"
            error={
              actionData?.errors?.name ? (
                <em>{actionData?.errors.name}</em>
              ) : null
            }
          />

          <TextInput
            withAsterisk
            name="price"
            type="number"
            label="Price"
            leftSection={<HiCurrencyDollar />}
            placeholder="Price"
            error={
              actionData?.errors?.price ? (
                <em>{actionData?.errors.price}</em>
              ) : null
            }
          />
        </SimpleGrid>
        <Textarea
          withAsterisk
          name="description"
          label="Description"
          placeholder="Description"
          error={
            actionData?.errors?.description ? (
              <em>{actionData?.errors.description}</em>
            ) : null
          }
        />

        <Box mt="md">
          <h3 className="text-lg font-semibold mb-2">Add-ons</h3>
          {addons.map((addon, index) => (
            <Group key={addon.id} align="center" mb="sm">
              <TextInput
                w={450}
                name="addons[]"
                placeholder={`Addon ${index + 1}`}
                value={addon.value}
                onChange={(e) => handleAddonChange(addon.id, e.target.value)}
                withAsterisk
                error={
                  actionData?.errors?.addons &&
                  actionData?.errors?.addons[index] ? (
                    <em>{actionData?.errors?.addons[index]}</em>  
                  ) : null
                }
              />

              <button type="button" onClick={() => handleRemoveAddon(addon.id)}>
                <HiMinusCircle />
              </button>
            </Group>
          ))}
          <button type="button" onClick={handleAddAddon}>
            <HiPlusCircle />
          </button>
        </Box>

        <Group justify="flex-end" mt="md">
          <Button type="submit" disabled={navigation.state === "submitting"}>
            {navigation.state === "submitting" ? "Creating..." : "Create"}
          </Button>
        </Group>
      </Form>
    </Box>
  );
};

export default PlanForm;
