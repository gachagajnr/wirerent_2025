 import { Form, useActionData, useNavigation } from "@remix-run/react";
import { HiLocationMarker } from "react-icons/hi";
// import { UploadButton } from "~/utils/uploadthing";

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
// import { useState } from "react";

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
export interface ServerData {
  uploadedBy: string;
}
export interface FileData {
  name: string;
  size: number;
  key: string;
  serverData: ServerData;
  url: string;
  customId: string | null;
  type: string;
}


const MemberForm = () => {
  const navigation = useNavigation();
  const actionData = useActionData<typeof action>();
  // const [uploadedFiles, setUploadedFiles] = useState();

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
              { value: "Male", label: "Male" },
              { value: "Female", label: "Female" },
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
        {/* <UploadDropzone
          className=""
          content={{
            button({ ready }) {
              if (ready) return <div>Upload stuff</div>;
              return "Getting ready...";
            },
            allowedContent({ ready, fileTypes, isUploading }) {
              if (!ready) return "Checking what you allow";
              if (isUploading) return "Seems like stuff is uploading";
              return `Stuff you can upload: ${fileTypes.join(", ")}`;
            },
          }}
          endpoint="imageUploader"
          onClientUploadComplete={async (res) => {
            setUploadedFiles(res as FileData[]);


          }}
          onUploadError={(error) => {
            alert(`ERROR! ${error.message}`);
          }}
          onUploadBegin={() => {}}
        /> */}
          {/* <UploadButton
        endpoint="imageUploader"
        onClientUploadComplete={(res) => {
          // Do something with the response
          console.log("Files: ", res);
          alert("Upload Completed");
        }}
        onUploadError={(error: Error) => {
          // Do something with the error.
          alert(`ERROR! ${error.message}`);
        }}
      />
        <input
          type="hidden"
          name="uploadedFiles"
          value={JSON.stringify(uploadedFiles)}
        /> */}

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
