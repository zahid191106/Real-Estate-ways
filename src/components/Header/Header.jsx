import {
  Flex,
  Heading,
  Button,
  HStack,
  chakra,
  ButtonGroup,
  useBreakpointValue,
  Divider,
  Text,
  useColorMode,
  useColorModeValue,
  Image,
  VStack,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import NavMobile from "./NavMobile";
import { BiBed, BiBath, BiArea, BiSearch } from "react-icons/bi";

const Header = () => {
  const isDesktop = useBreakpointValue({ base: false, lg: true });

  return (
    <chakra.header id="header"  borderBottom="1px solid rgb(0,0,0,0.3)" >
      <Flex w="100%" py="5" align="center" justify="space-between">
        <Link to="/">
        
          <HStack id="logo" >
            <Image 
            src="/logo.png"
            h='50'
            w='50'
            />
             <Heading fontSize="3xl" color="green.700" display={{  md: "block", base: "none" }}>
              Real Estate
             </Heading>
          </HStack>
        </Link>
        {isDesktop ? (
          <>
            <ButtonGroup as="nav"  variant="link" spacing="5">
              <Link to="/">
                <Button id="home" fontSize="16px">Home</Button>
              </Link>
              <Link to="/about">
                <Button id="about" fontSize="16px">About</Button>
              </Link>
              <Link to="/contact">
                <Button id="contact" fontSize="16px">Contact</Button>
              </Link>
              {/* {
                  ['Home', 'Features', 'About Us'].map((item)=>(
                    <Button fontSize='16px' key={item}>{item}</Button>
                    ))
                } */}
            </ButtonGroup>

            <HStack>
            
              <Link to="/signup">
                <Button id="headersignup" size="sm" variant="solid">
                  Sign up
                </Button>
              </Link>
            </HStack>
          </>
        ) : (
          <NavMobile />
        )}
      </Flex>
      {/* <Divider color='pink.800' w={}='20px' />  */}
    </chakra.header>
  );
};

export default Header;
