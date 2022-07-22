import { Alert, Box, Button, Container, Flex, Heading, HStack, Input, Select, Stack, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Faq from "../GalleryPage/Faq";
import Tryfree from "../GalleryPage/Tryfree";
import Navbar from "../Navbar/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import DataBox from "./DataBox";

const Resource = () => {
  const [size, setsize] = useState("3500px")
  return (
    <>
      <Navbar />
      <Box w="100%" h={size} bg="#f6f6f7">
        <Box w="100%" h="auto" textAlign="center" pt="50px">
          <Heading pb="10px" as="h2" size="3xl">
            The Marketing Resources Hub
          </Heading>
          <Text fontSize="20px">
            Everything you need for digital and email marketing that's on point.
          </Text>
        </Box>
        <Flex
          justifyContent="space-between"
          bg="white"
          w="100%"
          h="auto"
          mt="50px"
          px="10rem"
        >
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            borderBottom="5px Solid #9676ff"
          >
            {" "}
            All
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            BLOG
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            GUIDES
          </Button>
          <Button
            bg="none"
             position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            INFOGRAPHICS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            COLLECTION
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            WEBNIARS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            EVENTS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            VIDEOS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            COMPARISONS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            KNOWLEDGE BASE
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            GLOSSARY
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            TOOLS
          </Button>
        </Flex>

        <Flex  w="100%" h="600px"  justifyContent="space-evenly" pt="40px">
          <Box bg="white" w="50%" h="90%" boxShadow='lg'></Box>
            <Stack bg="green"  w="25%" h="90%" gap="2.7rem">
              <Box w="100%" h="45%" bg="aliceblue"  boxShadow='lg'></Box>
              <Box w="100%" h="45%" bg="aliceblue"  boxShadow='lg'></Box>
            </Stack>
        </Flex>

        <Container mt="5rem"><Heading>Browse our resource library</Heading></Container>

        <Box w="100%" h="300px">
        <Flex w="100%" px="8rem" pt="6rem" gap="30px">
          <Box  h="50px" w="70%"> 
        <Input h="50px" b=" 4px solid black" variant='flushed' placeholder='Search Resources' />
        </Box>
        <Box h="50px" w="30%">
        <Select rounded="none" b=" 4px solid black" placeholder='Filter by topic' h="50px">
           <option value='coding'>Coding</option>
           <option value='social'>Social Media</option>
           <option value='ecommerce'>Ecommerce</option>
        </Select>
        </Box>
        </Flex>

          <Grid templateColumns='repeat(3, 1fr)' templateRows="auto" gap={5} w="100%" h="auto"  mt="2rem"px="8rem" pt="1rem">
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
            <DataBox />
          </Grid> 

          <Box w="100%" bg="#9767ff" textAlign="center" mt="5rem">
            <Container>
              <HStack>
              <Text fontSize={20}>Get the latest marketing trends in our newsletter.</Text><Button w="200px" h="45px">Subscibe</Button>
              </HStack>
            </Container>
          </Box>
        </Box>

      </Box>
      <Faq show={true} title="Learn how to send more effective emails. " />
      <Tryfree
        heading="Get started with Campaign Monitor today."
        text="With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing"
      />
      <Footer />
    </>
  );
};

export default Resource;
