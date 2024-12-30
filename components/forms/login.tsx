"use client"
import { useForm } from "react-hook-form";
import { HiLockClosed, HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Field } from "@/components/ui/field"
import {
  Input,
  
   Button,
} from "@chakra-ui/react";
 import { InputGroup } from "@/components/ui/input-group";

import feathersClient from "@/utils/api";

 export default function LoginForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = async(data:any) => {
     
    const body = {
      email: data.email,
      password: data.password,
      
    };
    try {
      const response = await feathersClient.authenticate({
        strategy: "local",
       body
      });
      console.log("LOGIN RESPONSE", response);
    } catch (e) {
      console.log("LOGIN ERROR", e);
    }
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        <Field
          label="Email"
          invalid={!!errors.email}
          errorText={errors.email?.message?.toString()}
        >
                <InputGroup flex="1" startElement={<HiMail />}>

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
            </InputGroup>
        </Field>

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

        <Button
          type="submit"
          colorScheme="blue"
          variant="outline"
          mt={4}
          w="full"
          color="white"
          bg="blue.400"
          size="sm"
          _hover={{ bg: "purple.600", borderColor: "blue.500" }}
          _active={{ bg: "blue.500" }}
        >
          Login
        </Button>
      </form>
    );
}

