import {
    HStack,
    VStack,
    Button,
    Text,
    Input,
    Textarea,
    Heading,
    Stack,
    Box,
    Image,
    useToast
  } from "@chakra-ui/react";
  import Apartment1Lg from "../assets/images/apartments/a1lg.png";
  import { Link, useNavigate } from "react-router-dom";
  import { useState } from "react";
  
  const Signin = () => {

    const [signInData, setSignInData] = useState({ email: '', password: '' });
    const [message, setMessage] = useState('');
    const navigate = useNavigate()

    const toast = useToast();

    const handleClick = () => {
       toast({
         
         title: "Coming Soon",
         description: "This feature is under development.",
         status: "warning",
         duration: 2000,
         isClosable: true,
         position: 'top',
       });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (signInData.email === 'test@gmail.com' && signInData.password === 'test123') {
            setMessage('User signed in successfully');
            setMessage(toast({
              title: "Sign in",
              description: "User sign in successfully.",
              status: "success",
              duration: 3000,
              isClosable: true,
              position: 'top',
            }));
            navigate('/')
        } else {
            setMessage('Invalid email or password. Sign-in failed.');
        }

        
    };

    return (
      <>
        <Stack my="6" h="100vh"  overflow="hidden" direction={{ base: "column", md: "row" }}>
          
          <VStack
            flexGrow="1"
            px={{ sm: "6", md: "30", lg: "40", xl: "60" }}
            py={{ sm: "8", md: "16" }}
            bg="pink.200"
            justify="center"
            align="left"
            borderRadius="xl"
          >
            <Text align="center" mt="-8" color="pink.700" fontWeight="extrabold" fontSize="3xl">Sign In</Text>
            <form onSubmit={handleSubmit}>
              <Input 
                id="signinemail" 
                type="email" 
                placeholder="Email*" 
                // required 
                value={signInData.email}
                onChange={(e) => setSignInData({ ...signInData, email: e.target.value })}
              />
              <Input 
              id="signinpassword" my="2" 
              type="password" 
              placeholder="Password*" 
              value={signInData.password}
              onChange={(e) => setSignInData({ ...signInData, password: e.target.value })}
              // required 
              />
              <HStack my="2">
                <Button type="submit" id="signinbtn" w="full" px="4">
                  Sign In
                </Button>
              </HStack>
              <HStack my="2" >
                <Button id="signingoogle" w="full" px="4" bg="red.600" _hover={{bg: "red.700"}} onClick={handleClick}>
                  Continue with Google
                </Button>
              </HStack>
              <HStack my="2" >
                <Button id="signinfb" w="full"  px="4" bg="blue.600" _hover={{bg: "blue.700"}} onClick={handleClick}>
                  Continue with Facebook
                </Button>
              </HStack>
              <span className="me-2">Don't Have an account?</span>
              <strong><Link id="signuplink" to="/signup" colorScheme="blue.500" >Sign Up</Link></strong>
            </form>
            <Text id="message" color='red.600'>{message}</Text>
          </VStack>
        </Stack>
      </>
    );
  };
  
  export default Signin;
  