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
          <GridItem w="100%" ><Image src="https://images.pexels.com/photos/430205/pexels-photo-430205.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo"/></GridItem>
          <GridItem w="100%" h="200"  ><Image src="https://images.pexels.com/photos/1162361/pexels-photo-1162361.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo"/></GridItem> 
          <GridItem w="100%" h="200"  ><Image src="https://images.pexels.com/photos/1337380/pexels-photo-1337380.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo"/></GridItem>
          <GridItem w="100%" h="200"  ><Image src="https://images.pexels.com/photos/1337386/pexels-photo-1337386.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo"/></GridItem>
          <GridItem w="100%" h="200"  ><Image src="https://images.pexels.com/photos/1337384/pexels-photo-1337384.jpeg?auto=compress&cs=tinysrgb&w=600" alt="logo"/></GridItem>
        </Grid>
      </Container>
    </Box>
  );
};

export default Details;
