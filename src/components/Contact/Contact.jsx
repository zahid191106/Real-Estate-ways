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
import Typewriter from "typewriter-effect";
import House3Lg from '../../assets/images/houses/house3lg.png'
import { useState } from "react";
import { Link } from "react-router-dom";
import { IoLogoWhatsapp } from "react-icons/io";

const Contact = () => {
  const [contactData, setContactData] = useState({name: "", email: "", phone: ""});
  const [message, setMessage] = useState(" ")

  const handleWhatsAppClick = () => {
    // Replace '1234567890' with the recipient's phone number
    const phoneNumber = "03017393026";
    // Create a WhatsApp link
    const whatsappLink = `https://wa.me/${phoneNumber}`;
    // Open the WhatsApp link in a new tab
    window.open(whatsappLink, "_blank");
  };

  const toast = useToast();

  const handleSubmition = (e) =>{
    e.preventDefault();
    if(contactData.name.length > 4 && contactData.phone.length === 11 ){
      setMessage("Message send successfully")
    }else{
      setMessage("Invalid data for contact.")
    }

   

    // toast({
      
    //   title: "Thank you",
    //   description: "Your Message Send Successfully",
    //   status: "success",
    //   duration: 3000,
    //   isClosable: true,
    //   position: 'top',
    // });
  }
  return (
    <>
      <Stack my="6" h='100vh'  overflow="hidden" direction={{ base: "column", md: "row" }}>
        <VStack justify="center">
          <Box h="100%" display={{  lg: "block", base: "none" }}>
            <Image src={House3Lg} alt="house" h="100%" objectFit="cover" />
          </Box>
        </VStack>

        <VStack
          flexGrow="1"
          px={{ sm: "6", md: "10" }}
          py={{ sm: "8", md: "16" }}
          bg="pink.200"
          justify="center"
          align="left"
          borderRadius="xl"
        >
        
        <Box color="pink.700" marginTop={{base : '2', sm : '-4', md : '-12' }} fontWeight="extrabold" fontSize={{ base: "full", md: "200%" }} >
          <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["Contact Us", "Ask Your Problem"],
            }}
          />
        </Box>
          <form onSubmit={handleSubmition}>
            <Input 
              type="text" 
              id="contactname" 
              mt="3" mb="2" 
              placeholder="Name*"
              value={contactData.name} 
              onChange={(e) => setContactData({...contactData, name: e.target.value})}
        
             />
            <Input 
              type="email" 
              id="contactemail" 
              placeholder="Email*" 
              value={contactData.email} 
              onChange={(e) => setContactData({...contactData, email: e.target.value})}
              
              />
            <Input 
              type="number" 
              id="contactphone" 
              my="2" 
              placeholder="Phone*"
              value={contactData.phone} 
              onChange={(e) => setContactData({...contactData, phone: e.target.value})}

              />
            <Textarea
              id="contacttextarea"
              my="2"
              placeholder="Message*"
              size="sm"
            />
            <HStack my="2">
              <Button type="submit" w="full" px="4" id="sendmsg">
                Send Message
              </Button>
              
            </HStack>
          </form>
              <Button colorScheme='green' w="full" px="4" id="sendmsg"  onClick={handleWhatsAppClick}>
                <IoLogoWhatsapp style={{fontSize : '30px', marginRight : '5px'}} /> WhatsApp
              </Button>
            <Text id="message" color="red.600" >{message}</Text>
        </VStack>
      </Stack>
    </>
  );
};

export default Contact;
