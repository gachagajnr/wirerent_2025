"use client"

import { useForm } from "react-hook-form";
import { HiLockClosed, HiMail } from 'react-icons/hi';
import { useRouter } from "next/navigation";
import { Field } from "@/components/ui/field"
import {
  Input,
  Button,
  Heading,
} from "@chakra-ui/react";
import { InputGroup } from "@/components/ui/input-group";

import { login } from "@/lib/auth";
import { useState } from "react";
import { useAuth } from "@/context/AuthContext";

 export default function LoginForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
   } = useForm();
     const [error, setError] = useState("");

    const { setUser } = useAuth();
    const router = useRouter();


    const onSubmit = async(data:any) => {
      setError('');
    const body = {
      email: data.email,
      password: data.password,
      
    };
    try {
      const {user} = await login(
        body.email,body.password
      );
      console.log("USER", user);

      setUser(user);
      router.push("/dashboard");
    } catch (e:any) {
      console.log("LOGIN ERROR", e);
      setError(e.toString());

    }
    };
    return (
      <form onSubmit={handleSubmit(onSubmit)}>
        {error && (
          <Heading mb={2} as="p" size="xs" textAlign="center" color="red.500">
            {error}
          </Heading>
        )}

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

