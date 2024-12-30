"use client"
import { useForm } from "react-hook-form";
import { Field } from "@/components/ui/field"
import {
  Input,
  Button,
  HStack,
  Flex,
} from "@chakra-ui/react";
 

export default function ForgotPasswordForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data:any) => {
      console.log("Forgot Password Data",data);
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <HStack mt={4} flexWrap="wrap" flexDirection={{ base: "column", md: "row" }}>
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
         
        </HStack>
       

        <Button
          type="submit"
    
          mt={4}
          w="full"
          color="white"
          bg="blue.400"
          size="sm"
          _hover={{ bg: "purple.600", borderColor: "blue.500" }}
          _active={{ bg: "blue.500" }}
        >
          Reset Password
        </Button>
      </form>
    );
}

