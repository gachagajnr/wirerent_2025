 
import { Box,   Heading, Stack, Text, Link,     } from '@chakra-ui/react';

 import LoginForm from "@/components/forms/login"
 

export default function Login() {
 

  return (
    <Box
    
      display="flex"
      alignItems="center"
      justifyContent="center"
      bgGradient="linear(to-l, #7928CA, #FF0080)"
      p={4}
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
      <Stack  >
        <Heading as="h1" size="xl" mb={6} textAlign="center" color="purple.600">
          Welcome Back
        </Heading>
         <LoginForm  />

         
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
  );
}
