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
  
  const Signup = () => {
    const [signupData, setSignupData] = useState({name: "", email: "", password: ""});
    const [message, setMessage] = useState(" ")
    const navigate = useNavigate()

    const toast = useToast();

 const handleClick = () => {
    toast({
      
      title: "Coming Soon",
      description: "This feature is under development.",
      status: "info",
      duration: 2000,
      isClosable: true,
      position: 'top',
    });
 };

    const handleSubmit = (e) => {
      e.preventDefault();
      if(signupData.email === "test@gmail.com" && signupData.password === "test123"){
        setMessage("User signed up successfully")
        setMessage(toast({
          title: "Sign up",
          description: "User sign up successfully.",
          status: "success",
          duration: 3000,
          isClosable: true,
          position: 'top',
        }))
        navigate('/')
      }else{
        setMessage("Invalid cradtenials for sign-up.")
      }
  };

    return (
      <>
        <Stack my="6" h="100vh" overflow="hidden" direction={{ base: "column", md: "row" }}>
          
          <VStack
            flexGrow="1"
            px={{ sm: "10", md: "30", lg: "40", xl: "60" }}
            py={{ sm: "8", md: "16" }}
            bg="pink.200"
            justify="center"
            align="left"
            borderRadius="xl"
          >
          
            <Text align="center" mt="4" color="pink.700" fontWeight="extrabold" fontSize="3xl">Sign up</Text>
            <form onSubmit={handleSubmit} >
              <Input 
              id="signupname" 
              mt="3" mb="2" 
              type="text" 
              placeholder="Name*" 
              value={signupData.name} 
              onChange={(e) => setSignupData({...signupData, name: e.target.value.replace(/[^a-zA-Z0-9]/g, '')})}
        

              />
              <Input 
              id="signupemail" 
              type="email" 
              placeholder="Email*"
              value={signupData.email} 
              onChange={(e) => setSignupData({...signupData, email: e.target.value})}
               

              />
              <Input 
              id="signuppassword" 
              my="2" 
              type="password" 
              placeholder="Password*"
              value={signupData.password} 
              onChange={(e) => setSignupData({...signupData, password: e.target.value})}
               

              />
              <HStack my="2">
                <Button type="submit" id="signupbtn" w="full" px="4" >
                  Sign Up
                </Button>
              </HStack>
              <HStack my="2" >
                <Button id="signupgoogle" w="full" px="4" bg="red.600" _hover={{bg: "red.700"}} onClick={handleClick}>
                  Continue with Google
                </Button>
              </HStack>
              <HStack my="2"  >
                <Button id="signupfb" w="full" px="4" bg="blue.600" _hover={{bg: "blue.700"}} onClick={handleClick}>
                  Continue with Facebook
                </Button>
              </HStack>
              <span className="me-2">Have an account?</span>
              <strong><Link id="signinlink" to="/signin"  >Sign In</Link></strong>
            </form>
            <Text id="message" color="red.600" >{message}</Text>
          </VStack>
        </Stack>
      </>
    );
  };
  
  export default Signup;
  