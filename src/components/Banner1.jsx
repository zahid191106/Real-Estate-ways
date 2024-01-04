"use client";

import {
  Button,
  Flex,
  HStack,
  Heading,
  Image,
  Stack,
  Text,
  useBreakpointValue,
} from "@chakra-ui/react";
// import { bannerData } from "../data";
// import Apartment1Lg from "../assets/images/apartments/a1lg.png";
import Apartment6Lg from "../assets/images/apartments/a6lg.png";
import Typewriter from "typewriter-effect";
import { Link } from "react-router-dom";

export default function Banner1() {
  return (
    <Stack minH={"70vh"} marginTop="2" direction={{ base: "column", md: "row" }}>
      <Flex flex={1}>
        <Image alt={"Login Image"} objectFit={"cover"} src={Apartment6Lg} />
      </Flex>

      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={6} w={"full"} maxW={"lg"}>
          <HStack>
            <a href="#search">
              <Button size="sm" variant="solid" marginTop="-16">
                {" "}
                Search{" "}
              </Button>
            </a>
            <a href="#property">
              <Button size="sm" variant="solid" marginTop="-16">
                {" "}
                Property{" "}
              </Button>
            </a>
          </HStack>
          <Heading fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}>
            <Text
              as={"span"}
              position={"relative"}
              _after={{
                content: "''",
                width: "full",
                height: useBreakpointValue({ base: "20%", md: "30%" }),
                position: "absolute",
                bottom: 1,
                left: 0,
                bg: "pink.400",
                zIndex: -1,
              }}
            >
              Best Choose
            </Text>
            <br />{" "}
            
            <Text color={"blue.400"} as={"span"}>
            <Typewriter
            options={{
              autoStart: true,
              loop: true,
              delay: 40,
              strings: ["<Text color={'blue.400'} as={'span'}>For Your Dream </Text>", "<span>For Your Home </span>"],
            }}
          />
            </Text>{" "}
          </Heading>
          <Text fontSize={{ base: "md", lg: "lg" }} color={"gray.500"}>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet,
            illoat. Repudiandae ratione impedit delectus consectetur.
            Aspernaturvero obcaecati placeat ab distinctio unde ipsam molestias
            atqueratione
          </Text>
          <Stack direction={{ base: "column", md: "row" }} spacing={4}>
            <a href="#property">
              <Button
                id="getstartbtn"
                rounded={"full"}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Get Started
              </Button>
            </a>
            <Link to="/uploadproperty">
              <Button id="uploadbtn" rounded={"full"}>Upload Property</Button>
            </Link>
          </Stack>
        </Stack>
      </Flex>
    </Stack>
  );
}
