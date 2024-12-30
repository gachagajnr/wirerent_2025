"use client"
import { useForm } from "react-hook-form";
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
        <HStack
          mt={4}
          flexWrap="wrap"
          flexDirection={{ base: "column", md: "row" }}
        >
          <Field
            label="Email"
            invalid
            errorText={errors.email?.message?.toString()}
          >
            <Input
              id="email"
              type="email"
              placeholder="Enter your email"
              padding={3}
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
          </Field>
          <Field
            label="Phone Number"
            invalid
            errorText={errors.phoneNumber?.message?.toString()}
          >
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
          </Field>
        </HStack>
        <Flex flexDirection={{ base: "column", md: "row" }} gap={4}>
          <Field
            label="Password"
            mt={2}
            invalid
            errorText={errors.password?.message?.toString()}
          >
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
          </Field>
          <Field
            label="Confirm Password"
            mt={2}
            invalid
            errorText={errors.password?.message?.toString()}
          >
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
              })}
            />
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