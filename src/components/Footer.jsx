import { Text, Center} from '@chakra-ui/react';

const Footer = () => {
  let currentYear = new Date().getFullYear()
  return (
    <>
      <Center borderTopEndRadius='50%' mt='8' py='20px' bg='pink.700' color='white'>
        <Text fontSize='15px'>Copyright &copy; {currentYear}. All rights reserved.</Text>
      </Center>
    </>
  )
}

export default Footer