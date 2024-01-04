import { Stack, VStack, Heading, Text, Box, HStack, Image, Input, Textarea, Button, Flex, background } from "@chakra-ui/react"
import { BiBed, BiBath, BiArea, BiCar, BiChevronRight, BiChevronLeft } from "react-icons/bi";

import { useContext, useState } from "react";
import { useParams } from "react-router-dom";

import { HouseContext } from "../../context/HouseContext";
import Form from "./Form";
// import {imagesData} from "../../data"

const HouseDetails = () => {

  const {propertyId} = useParams();
  const { houses } = useContext(HouseContext);

  const searchedHouse = houses.find(house=> house.id== propertyId)


  // const [currentImageIndex, setCurrentImageIndex] = useState(0);
  // const nextImage = () => {
  //   setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesData.length);
  // };
  // const prevImage = () => {
  //   setCurrentImageIndex((prevIndex) =>
  //     prevIndex === 0 ? imagesData.length - 1 : prevIndex - 1 
  //   );
  // };

  return (
    <>
      <Stack direction={{base: 'column', md: 'row'}} justify='space-between' align={{md: 'center'}}  my='28px'>
        <Box>
          <Heading id="d-housename" fontSize='22px'>{searchedHouse.name}</Heading>
          <Text id="d-address" fontSize='15px'>{searchedHouse.address}</Text>
        </Box>
        
        <HStack>
          <Text id="d-type" px='3' borderRadius='full' bg='green.300'>{searchedHouse.type}</Text>
          <Text id="d-city" px='3' borderRadius='full' bg='purple.300'>{searchedHouse.city}</Text>
        </HStack>

        <Text id="d-price" fontWeight="extrabold" fontSize="20px" color="pink.500">Rs. {searchedHouse.price}</Text>
      </Stack>

      <Stack direction={{base:'column', lg: 'row'}} gap='6' align='flex-start'>
        <VStack align='left' maxW='640px'>
          <Image id="detailimg" src={searchedHouse.imageLg} alt='house' />
          {/* <Box position={"relative"}>
          <Image src={`${searchedHouse.imageslider[currentImageIndex]} `}  />
          <Flex position={"absolute"} padding={1} justify={"space-between"} mt={0} inset={0} >
          <button onClick={prevImage}  ><BiChevronLeft size={30} style={{background: "grey", borderRadius: "100%",  }} /></button>
          <button onClick={nextImage}  ><BiChevronRight size={30} style={{background: "grey", borderRadius: "100%", }} /></button>
          </Flex>
          </Box> */}
          <Stack  py='10px' spacing={{sm: '3', md: '5'}} direction={{base: 'column', md: 'row'}}>
            <HStack>
                <BiBed style={{ color: "#D53F8C" }} />
                <Text id="detailbedrooms" fontSize="14px">{searchedHouse.bedrooms} Bedrooms</Text>
            </HStack>

            <HStack>
                <BiBath style={{ color: "#D53F8C" }} />
                <Text id="detailbathrooms" fontSize="14px">{searchedHouse.bathrooms} Bathrooms</Text>
            </HStack>

            <HStack>
                <BiCar style={{ color: "#D53F8C" }} />
                <Text id="detailgarage" fontSize="14px">{searchedHouse.garage} Garage</Text>
            </HStack>

            <HStack>
                <BiArea style={{ color: "#D53F8C" }} />
                <Text id="detailarea" fontSize="14px">{searchedHouse.surface}</Text>
            </HStack>
          </Stack>
        
          <Text id="detaildescription" fontSize='15px'>{searchedHouse.description}</Text>
      
        </VStack>
        
        <Form searchedHouse={searchedHouse} />
      </Stack>
    </>
  )
}

export default HouseDetails;