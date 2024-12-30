"use client"
import { useForm } from "react-hook-form";
import { HiLockClosed, HiMail, HiPhone, HiUser } from "react-icons/hi";
 import { InputGroup } from "@/components/ui/input-group";

import { Field } from "@/components/ui/field"
import {
  Input,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";
import {users} from '@/utils/api'
 

 interface RegisterFormProps {
 }

const RegisterForm: React.FC<RegisterFormProps> = ( ) => {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

  const onSubmit = async(data: any) => {

    const body = {
      "email": data.email,
      "password": data.password,
      "phoneNumber":data.phoneNumber
    }
    try {
      const response = await users.create(body);
      console.log("REGISTER RESPONSE",response)

    } catch (e) {
            console.log("REGISTER ERROR", e);

      
    }
  };
  
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack mt={4} flexDirection={{ base: "column", md: "row" }}>
          <Field
            label="Name"
            invalid={!!errors.name}
            errorText={errors.name?.message?.toString()}
          >
            <InputGroup flex="1" startElement={<HiUser />}>
              <Input
                id="name"
                type="name"
                placeholder="Enter full name"
                border="1px solid #E0E0E0"
                borderRadius="md"
                {...register("name", {
                  required: "Name is required",
                  pattern: {
                    value: /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/,
                    message: "Please enter a valid full name",
                  },
                })}
              />
            </InputGroup>
          </Field>
          <Field
            label="Website"
            invalid={!!errors.website}
            errorText={errors.website?.message?.toString()}
          >
            <InputGroup flex="1" startElement="https://">
              <Input
                id="website"
                ps="3.55em"
                placeholder="yoursite.com"
                border="1px solid #E0E0E0"
                borderRadius="md"
                {...register("website", {
                  required: "Phone number is required",
                  pattern: {
                    value: /^[0-9]{10}$/,
                    message: "Invalid phone number",
                  },
                })}
              />
            </InputGroup>
          </Field>
        </HStack>
        <Field
          mt={2}
          label="Email"
          invalid={!!errors.email}
          errorText={errors.email?.message?.toString()}
        >
          <InputGroup width="100%" flex="1" startElement={<HiMail />}>
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              border="1px solid #E0E0E0"
              borderRadius="md"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                  message: "Invalid email address",
                },
              })}
            />
          </InputGroup>
        </Field>
        <Field
          mt={2}
          label="Phone Number"
          invalid={!!errors.phoneNumber}
          errorText={errors.phoneNumber?.message?.toString()}
        >
          <InputGroup width="100%" flex="1" startElement={<HiPhone />}>
            <Input
              id="phoneNumber"
              type="number"
              placeholder="Enter your phone number"
              padding={3}
              border="1px solid #E0E0E0"
              borderRadius="md"
              {...register("phoneNumber", {
                required: "Phone number is required",
                pattern: {
                  value: /^[0-9]{10}$/,
                  message: "Invalid phone number",
                },
              })}
            />
          </InputGroup>
        </Field>
        <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
          <Field
            label="Password"
            mt={2}
            invalid={!!errors.password}
            errorText={errors.password?.message?.toString()}
          >
            <InputGroup flex="1" startElement={<HiLockClosed />}>
              <Input
                id="password"
                type="password"
                placeholder="********"
                padding={3}
                border="1px solid #E0E0E0"
                borderRadius="md"
                {...register("password", {
                  required: "Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters",
                  },
                })}
              />
            </InputGroup>
          </Field>
          <Field
            label="Confirm Password"
            mt={2}
            invalid={!!errors.confirmPassword}
            errorText={errors.confirmPassword?.message?.toString()}
          >
            <InputGroup flex="1" startElement={<HiLockClosed />}>
              <Input
                id="confirmPassword"
                type="password"
                placeholder="********"
                padding={3}
                border="1px solid #E0E0E0"
                borderRadius="md"
                {...register("confirmPassword", {
                  required: "Confirm Password is required",
                  minLength: {
                    value: 6,
                    message: "Password should be at least 6 characters",
                  },
                  validate: (value, formValues) =>
                    value === formValues.password || "Passwords do not match",
                })}
              />
            </InputGroup>
          </Field>
        </Flex>

        <Button
          type="submit"
          colorPalette="blue"
          variant="subtle"
          mt={4}
          w="full"
          color="white"
          bg="blue.400"
          size="sm"
          _hover={{ bg: "purple.600", borderColor: "blue.500" }}
          _active={{ bg: "blue.500" }}
        >
          Register
        </Button>
      </form>
    );
}

export default RegisterForm