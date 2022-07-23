import { Box, Button, Container, Heading, Input, Stack, Text, Textarea } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <Box bgGradient='linear(to-r, purple.200, gray.500)'>
      <Navbar />
      <Box textAlign="center"  w="100%" h="auto" mb="2rem">  
      <Heading onClick={() => alert("Please fill the form")} _hover={{color:"white", cursor:"pointer"}}>Contact Us</Heading>
      <Container  mt="2rem" rounded="1rem" boxShadow='dark-lg' py="4rem" bg="aliceblue" h="auto">
          <Input my="1rem" placeholder='Enter your name' size='lg' />
          <Input  my="1rem" placeholder='Enter your email' size='lg' />
          <Input  my="1rem" placeholder='Enter your subject' size='lg' />
          <Textarea placeholder='Message' />
          <Button my="1rem" w="100%" _hover={{color:"white"}} bg='#9676ff' size='lg'>SEND</Button>
          <Text color="gray">Can’t remember your password?</Text>
      </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Contact;
