"use client"
import { useForm } from "react-hook-form";
import { HiLockClosed, HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion';
import { Field } from "@/components/ui/field"
import {
  Input,
  
 
  Button,
 } from "@chakra-ui/react";

 export default function LoginForm() {
    const {
      register,
      handleSubmit,
      formState: { errors },
    } = useForm();

    const onSubmit = (data:any) => {
      console.log("data",data);
    };
    return (
      
        <form onSubmit={handleSubmit(onSubmit)}>
          <Field label="Email" invalid errorText={errors.email?.message?.toString()}>
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

          <Field label="Password" mt={4} invalid errorText={errors.password?.message?.toString()}>
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

          <Button
            type="submit"
          colorScheme="blue"
          variant="outline"
            mt={4}
            w="full"
            size="md"
            
            _hover={{ bg: "purple.600" }}
            _active={{ bg: "purple.700" }}
          >
            Login
          </Button>
        </form>

        
    
    );
}

