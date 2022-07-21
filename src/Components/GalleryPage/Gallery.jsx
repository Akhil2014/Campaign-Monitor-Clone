import { Box, Button, ButtonGroup, Container, Divider, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";
import Faq from "./Faq";
import Tryfree from "./Tryfree";

const Gallery = () => {

  return (
    <>
      <Navbar />
      <Box w="100%" h="1000px" bg="gray.200">
        <Box w="100%" bg="white" h="450px" pt="20px">
          <Box textAlign="center" w="50%" m="auto">
            <Text fontSize="60px" fontWeight="bold">
              Introducing the 97 top email marketing campaign examples and
              designs.
            </Text>
          </Box>
          <Box textAlign="center">
            <Text>
              We’ve curated a selection of the most inspiring and effective
              email marketing campaigns sent. Get started for free
            </Text>
            <Button
             position="none"
              borderRadius={3}
              _hover="none"
              _active="none"
              h="60px"
              w="250px"
              bg="#7856ff"
              color="white"
              mt="20px"
            >
              Get started for free
            </Button>
          </Box>
          
        </Box>

        <Box  p="60px" w="100%" h="600px">
          <Divider  />
          <Flex w="70%" h="40px" m="auto" justifyContent="space-between">
              <Text fontSize="22px" fontWeight="bold">Gallery filter :</Text>
              <Button borderRadius="40px" bg="none" _hover={{bg:"#7856ff",color:"white"}} color="#7856ff">FEATURED</Button>
              <Button borderRadius="40px" bg="none" _hover={{bg:"#7856ff",color:"white"}} color="#7856ff">MARKETING OFFERS</Button>
              <Button borderRadius="40px" bg="none" _hover={{bg:"#7856ff",color:"white"}} color="#7856ff">NEWSLETTER</Button>
              <Button borderRadius="40px" bg="none" _hover={{bg:"#7856ff",color:"white"}} color="#7856ff">ANNOUNMENTS</Button>
              <Button borderRadius="40px" bg="none" _hover={{bg:"#7856ff",color:"white"}} color="#7856ff">EVENTS</Button>
          </Flex>
        </Box>
       
      </Box>
      <Faq title="Learn how to send more effective emails. "/>
      <Tryfree heading="Get started with Campaign Monitor today." text="With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing" />
      <Footer />
    </>
  );
};

export default Gallery;
