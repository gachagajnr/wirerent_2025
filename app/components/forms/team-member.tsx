import { Form, useActionData, useNavigation } from "@remix-run/react";
import { HiLocationMarker } from "react-icons/hi";
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
  firstname: string;
  lastname: string;
  idNumber: number;
  dob: string;
  zone: string;
  gender: string;
  jobTitle?: number;
  rating?: number;
  availability?: boolean;
}

const MemberForm = () => {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();

  return (
    <Box maw={500} ta="start">
      <Form method="post">
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput
            name="firstname"
            type="text"
            withAsterisk
            label="First name"
            placeholder="First name"
            error={
              actionData?.errors?.firstname ? (
                <em>{actionData?.errors.firstname}</em>
              ) : null
            }
          />

          <TextInput
            name="lastname"
            withAsterisk
            label="Last name"
            type="text"
            placeholder="Last name"
            error={
              actionData?.errors?.lastname ? (
                <em>{actionData?.errors.lastname}</em>
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
            name="phone"
            type="number"
            withAsterisk
            label="Phone number"
            placeholder="Phone number"
            error={
              actionData?.errors?.phone ? (
                <em>{actionData?.errors.phone}</em>
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
              actionData?.errors?.email ? (
                <em>{actionData?.errors.email}</em>
              ) : null
            }
          />
        </SimpleGrid>
        <TextInput
          name="idNumber"
          withAsterisk
          label="ID Number"
          type="number"
          placeholder="ID Number"
          error={
            actionData?.errors?.idNumber ? (
              <em>{actionData?.errors.idNumber}</em>
            ) : null
          }
        />
        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <Select
            name="gender"
            label="Gender"
            placeholder="Gender"
            data={[
              { value: "MALE", label: "MALE" },
              { value: "FEMALE", label: "FEMALE" },
            ]}
            error={
              actionData?.errors?.gender ? (
                <em>{actionData?.errors.gender}</em>
              ) : null
            }
          />
          <TextInput
            name="dob"
            withAsterisk
            type="date"
            label="DOB"
            placeholder="DOB"
            error={
              actionData?.errors?.dob ? <em>{actionData?.errors.dob}</em> : null
            }
          />
        </SimpleGrid>

        <SimpleGrid
          cols={{ base: 1, sm: 2, lg: 2 }}
          spacing={{ base: 4, sm: "md" }}
          verticalSpacing={{ base: "xs", sm: "sm" }}
        >
          <TextInput
            name="jobTitle"
            withAsterisk
            type="text"
            label="Job Title"
            placeholder="Job Title"
            error={
              actionData?.errors?.jobTitle ? (
                <em>{actionData?.errors.jobTitle}</em>
              ) : null
            }
          />
          <TextInput
            name="zone"
            withAsterisk
            type="text"
            label="Zone/Area"
            leftSection={<HiLocationMarker />}
            placeholder="Zone/Area"
            error={
              actionData?.errors?.zone ? (
                <em>{actionData?.errors.zone}</em>
              ) : null
            }
          />
        </SimpleGrid>
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

export default MemberForm;
