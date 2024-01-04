import { Textarea, Image, VStack, HStack, Box, Text, Input, Button } from '@chakra-ui/react'
import { IoLogoWhatsapp } from "react-icons/io";

const Form = ({searchedHouse}) => {
    const handleWhatsAppClick = () => {
        // Replace '1234567890' with the recipient's phone number
        // const phoneNumber = "03017393026";
        // Create a WhatsApp link
        const whatsappLink = `https://wa.me/${searchedHouse.agent.phone}`;
        // Open the WhatsApp link in a new tab
        window.open(whatsappLink, "_blank");
      };
  return (
    <VStack border='1px' borderColor='pink.100' boxShadow='md' px='5' py='6'>
        <HStack>
            <Image id='agentimg' borderRadius='full' boxSize='75px' src={searchedHouse.agent.image} />
            <Box>
                <Text id='agentname' mb='-3px' fontWeight='extrabold' fontSize='15px'>{searchedHouse.agent.name}</Text>
                <Text id='agentphone' style={{fontSize: '12px'}}>+{searchedHouse.agent.phone}</Text>
            </Box>
        </HStack>

        <VStack my='3px' spacing='2px'>
            <form>
                <Input id='formname' mt='3' mb='2' placeholder="Name*" />
                <Input id='formemail' placeholder="Email*" />
                <Input id='formphone' my='2' placeholder="Phone*" />
                <Textarea id='formtextarea' my='2' placeholder='Message*' size='sm'  defaultValue='Hello, I am interested in [Modern apartment]' />
                <HStack my='2'>
                    <Button id='formsendmsg' w='full' px='4'>Send Message</Button>
                    <Button id='formcall' onClick={handleWhatsAppClick} w={{base: 'full', md: '50%'}} variant='outline' fontSize={38} colorScheme='whatsapp' ><IoLogoWhatsapp /> </Button>
                </HStack>
            </form>
        </VStack>
    </VStack>
  )
}

export default Form