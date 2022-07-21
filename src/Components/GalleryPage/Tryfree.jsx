import React from 'react'
import { Box, Button,  Container,  Heading,  Text } from "@chakra-ui/react";

const Tryfree = ({heading , text }) => {
  return (
    <>
         <Box w="100%" h="550px" bg="#6b98ff" pt="100px">
        <Container  w="50%" h="80%" textAlign="center">
          <Heading color="white">{heading}</Heading>
          <Text color="white" my="40px">With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing.</Text>
          <Button w="180px" h="55px" color="#9767ff">Try it for free</Button>
        </Container>
      </Box>
    </>
  )
}

export default Tryfree