import {
    HStack,
    VStack,
    Button,
    Text,
    Heading,
    Stack,
    Box,
    Image,
  } from "@chakra-ui/react";
  import "./Banner.css"
  import { BiPlus } from "react-icons/bi";
  import Typewriter from 'typewriter-effect'
  import { bannerData } from "../data";
  import Apartment1Lg from "../assets/images/apartments/a1lg.png";
  import Apartment6Lg from "../assets/images/apartments/a6lg.png";
import { Link } from "react-router-dom";
  
  const About = () => {
    return (
      <>
        <Stack  my='6'  overflow='hidden' direction={{ base: "column", md: "row" }}>
  
         <VStack justify='center'>
            <Box h='100%' display={{ base: "xl", lg: "flex"}} >
              <Image
                src={Apartment1Lg}
                alt="house"
                h='100%'
                objectFit='cover'
              />
            </Box>
          </VStack>
  
          <VStack
            flexGrow='1'
            px={{ sm: "6", md: "10" }}
            py={{ sm: '6',  md: "10" }}
            bg="pink.100"
            height='540px'
            justify="center"
            align="left"
            borderRadius="xl"
          >
          <Box color="pink.700" marginTop={{base : '2', sm : '-4', md : '2' }} fontWeight="extrabold" fontSize={{ base: "full", md: "150%" }} >
            <Typewriter
              options={{
                autoStart: true,
                loop: true,
                delay: 40,
                strings: ["About Our Real Estate Company", "About Our Mission", "About Our Service"],
              }}
            />
          </Box>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
              fugit illo? Delectus, voluptas unde quae cupiditate at amet beatae
              totam!
            </Text>
            <Text fontSize="sm">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatum,
              fugit illo? Delectus, voluptas unde quae cupiditate at amet beatae
              totam!
            </Text>
            <Box pt="3" pb="8">
            <Link to="/">
              <Button>Get Started</Button>
            </Link>
            </Box>
  
            <HStack spacing="3">
              {bannerData.map((item, index) => (
                <VStack
                  key={index}
                  bg="pink.200"
                  p="4"
                  borderRadius="md"
                  align="left"
                  pr="3"
                >
                  <HStack>
                    <Text fontSize={{sm: '14px', md: 'md'}} fontWeight="extrabold" mr="-2">
                      {Object.keys(item)}
                    </Text>{" "}
                    <BiPlus style={{ color: "#ED64A6" }} />
                  </HStack>
                  <Text fontSize={{sm: '12px', md: 'sm'}}>{Object.values(item)}</Text>
                </VStack>
              ))}
            </HStack>
          </VStack>
        </Stack>
      </>
    );
  };
  
  export default About;
  