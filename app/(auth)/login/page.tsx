'use client';

import { Box, Button,   Input, Heading, Stack, Text, Link, useBreakpointValue,   Icon } from '@chakra-ui/react';
import { HiLockClosed, HiMail } from 'react-icons/hi';
import { motion } from 'framer-motion'; // Animation
 import { Field } from "@/components/ui/field"

 

export default function Login() {
  // const toast = useToast();

  const handleLogin = () => {
    // toast({
    //   title: "Logged in successfully",
    //   description: "Welcome back! You have successfully logged in.",
    //   status: "success",
    //   duration: 5000,
    //   isClosable: true,
    // });
  };

  return (
    <Box
      minH="100vh"
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      p={4}
    >
  
       <Box
       data-state="open"
       _open={{
         animationName: "fade-in, scale-in",
         animationDuration: "300ms",
       }}
       _closed={{
         animationName: "fade-out, scale-out",
         animationDuration: "120ms",
       }}
     >
       
        <Heading as="h1" size="xl" mb={6} textAlign="center" color="purple.600">
          Welcome Back
        </Heading>

        <Stack  >
          {/* Email Input */}
          <Field label="Email">
      <Input placeholder="me@example.com" />
    </Field>

          {/* Login Button */}
          <Button
            colorScheme="purple"
            variant="solid"
            w="full"
            size="lg"
            mt={4}
            onClick={handleLogin}
            _hover={{ bg: 'purple.600' }}
            _active={{ bg: 'purple.700' }}
          >
            Login
          </Button>

          {/* Forgot Password Link */}
          <Text fontSize="sm" textAlign="center">
            <Link color="purple.500" href="/forgot-password">
              Forgot your password?
            </Link>
          </Text>

          {/* Sign Up Link */}
          <Text fontSize="sm" textAlign="center">
            Don't have an account?{' '}
            <Link color="purple.500" href="/signup">
              Sign Up
            </Link>
          </Text>
        </Stack>
      </Box>
    </Box>
  );
}
