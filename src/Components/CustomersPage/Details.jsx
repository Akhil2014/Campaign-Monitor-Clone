import { Box, Container, Heading, Image, Text } from "@chakra-ui/react";
import { Grid, GridItem } from '@chakra-ui/react'
import React from "react";

const Details = ({name,heading,title}) => {
  return (
    <Box w="100%" h="auto" my="2rem">
      <Container
        textAlign="center"
        maxW="850px"
        h="100%"
        color="white"
        py="3rem"
      >
        <Text color="#9675ff">{name}</Text>
        <Heading color="black" py="1rem" as="h2" size="xl">{heading} </Heading>
        <Text pb="2rem" color="gray" fontSize="15px"> {title} </Text>
        <Grid templateColumns="repeat(3, 1fr)" gap={6}>
          <GridItem w="100%" h="200" bg="blue.500" ><Image src="" alt="logo"/></GridItem>
          <GridItem w="100%" h="200" bg="blue.500" ><Image src="" alt="logo"/></GridItem> 
          <GridItem w="100%" h="200" bg="blue.500" ><Image src="" alt="logo"/></GridItem>
          <GridItem w="100%" h="200" bg="blue.500" ><Image src="" alt="logo"/></GridItem>
          <GridItem w="100%" h="200" bg="blue.500" ><Image src="" alt="logo"/></GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Details;
