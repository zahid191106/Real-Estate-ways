import { useRef } from "react";

import {
  ButtonGroup,
  VStack,
  Input,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  Button,
  IconButton,
  useDisclosure,
  Center,
} from "@chakra-ui/react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const NavMobile = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  return (
    <>
      <IconButton
        variant="ghost"
        icon={<FiMenu fontSize="1.35rem" />}
        aria-label="Open Menu"
        onClick={onOpen}
        ref={btnRef}
        id="menuopen"
        
      />
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
        
      >
        <DrawerOverlay  />
        <DrawerContent >
          <DrawerCloseButton id="menuclose" />
          <Center>
            <DrawerHeader>Menu</DrawerHeader>
          </Center>
          <DrawerBody px="14" mt="4">
            <VStack as="nav" spacing="8" variant="link" alignItems="left">
            
              <Link to="/">
                <ButtonGroup id="home" fontSize="16px">Home</ButtonGroup>
              </Link>
              <Link to="/about">
                <ButtonGroup id="about" fontSize="16px">About</ButtonGroup>
              </Link>
              <Link to="/contact">
                <ButtonGroup id="contact" fontSize="16px">Contact</ButtonGroup>
              </Link>

              {/* {
                            ['Home', 'Property', 'About Us'].map((item)=>(
                                <Button variant='link' key={item}>{item}</Button>
                            ))
                        } */}
              {/* <Button size='sm' variant='solid'>Contact</Button> */}
              <Link to="/signup">
                <Button id="headersignup" size="sm" variant="outline">
                 Sign up
                </Button>
              </Link>
            </VStack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default NavMobile;
