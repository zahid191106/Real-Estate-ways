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
    Select,
    TagLabel,
    FormLabel,
  } from "@chakra-ui/react";
  import { useContext, useState } from 'react';
  import { HouseContext } from '../context/HouseContext'
  
  const UploadProperty = () => {

    const {setProperty, properties} = useContext(HouseContext);
    const {setCity, cities} = useContext(HouseContext);

    const [fromData, setFormData] = useState({
      title:'',
      location:'',
      price:'',
    })

    const [errors, setErrors] = useState({
      title:'',
      location:'',
      price:'',
    })

    const [message, setMessage] = useState('')
    
    
    const propertyTypeHandler = (event)=> {
      setProperty(event.target.value);
    }


    const locationHandler = (event)=> {
      setCity(event.target.value);
    }

    const handlesubmit = (e) =>{
      e.preventDefault()
      alert('Property uploaded successfully')
    }

    return (
      <>
        <Stack my="6"  overflow="hidden" direction={{ base: "column", md: "row" }}>
          
          <VStack
            flexGrow="1"
            px={{ sm: "10", md: "30", lg: "40", xl: "60" }}
            py={{ sm: "8", md: "16" }}
            // bgGradient="linear(to-l, #005B41, #F5E8C7)"
            bg="pink.200"
            justify="center"
            align="left"
            borderRadius="xl"
          >
          
            <Text align="center" mt="-4" color="pink.700" fontWeight="extrabold" fontSize="3xl">Upload Property</Text>
            <form onSubmit={handlesubmit}>
              <Input mt="3" mb="2" placeholder="Title/House Name*"  required/>
              <Input placeholder="Enter Location*"  required/>
              <Input my="2" placeholder="How many Bedrooms* "  required/>
              <Input mb="2" placeholder="How many Bathrooms*"  required/>
              <Input placeholder="How many Garage*"  required/>
              <Input my="2" placeholder="Enter Area in Sq ft*"  required/>
              <Input my="2" placeholder="Enter Price*"  required/>
              <Select placeholder='select type' mb="2" onChange={propertyTypeHandler} required>
                {
                    properties.map((type, index)=> 
                    <option key={index}>{type}</option>
                    )
                }
              </Select>
              <Select placeholder='select country' mb="2" onChange={locationHandler} required>
                {
                    cities.map((city, index)=> 
                    <option key={index}>{city}</option>
                    )
                }
              </Select>

              
          {/* <TagLabel htmlFor="imageInput">Choose an image:</TagLabel> */}
              <FormLabel marginTop="3" marginBottom="1">Choose image:</FormLabel>
          <input type="file" id="imageInput"  />

              <HStack my="2">
                <Button type="submit" w="full" px="4">
                  Upload
                </Button>
              </HStack>
            </form>
          </VStack>
        </Stack>
      </>
    );
  };
  
  export default UploadProperty;
  