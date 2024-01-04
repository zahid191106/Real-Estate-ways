import {
  VStack,
  Divider,
  Heading,
  HStack,
  Image,
  Stack,
  Text,
  Flex,
} from "@chakra-ui/react";
import { BiBed, BiBath, BiArea, BiCar } from "react-icons/bi";

const HouseItem = ({ house }) => {
  return (
    <Flex justify="center" align="center" id="property">
      <Stack
        justify="center"
        width="300px"
        marginTop="4"
        bg="white"
        boxShadow="2xl"
        borderRadius="xl"
      >
        <Image id="cardimg" src={house.imageLg} h="170" alt="houses" />

        <VStack p="4" align="left">
          <HStack>
            <Text id="type" px="3" borderRadius="full" bg="green.300">
              {house.type}
            </Text>
            <Text id="city" px="3" borderRadius="full" bg="purple.300">
              {house.city}
            </Text>
          </HStack>
          <Text
            id="price"
            mt="-1"
            fontWeight="extrabold"
            fontSize="18px"
            color="pink.500"
          >
            Rs. {house.price}
            <span
              style={{
                fontSize: 12,
                color: "grey",
                fontWeight: "normal",
                marginLeft: "5px",
              }}
            >
              /month
            </span>
          </Text>

          <Heading id="housename" fontSize="24px" letterSpacing="tight">
            {house.name}
          </Heading>

          <Text id="address" fontSize="13px" color="grey" fontWeight="bold">
            {house.address}
          </Text>

          <Divider my="2.5" />

          <HStack spacing="5" id="carddetails">
            <HStack>
              <BiBed style={{ color: "#D53F8C" }} />
              <Text id="bedrooms" fontSize="12px">
                {house.bedrooms}
              </Text>
            </HStack>

            <HStack>
              <BiBath style={{ color: "#D53F8C" }} />
              <Text id="bathrooms" fontSize="12px">
                {house.bathrooms}
              </Text>
            </HStack>

            <HStack>
              <BiCar style={{ color: "#D53F8C" }} />
              <Text id="garage" fontSize="12px">
                {house.garage}
              </Text>
            </HStack>

            <HStack>
              <BiArea style={{ color: "#D53F8C" }} />
              <Text id="area" fontSize="12px">
                {house.surface}
              </Text>
            </HStack>
          </HStack>
        </VStack>
      </Stack>
    </Flex>
  );
};

export default HouseItem;
