import { Box, Button, Text } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";
import Faq from "../GalleryPage/Faq";
import Tryfree from "../GalleryPage/Tryfree";
import Navbar from "../Navbar/Navbar";

const Customer = () => {
  return (
    <>
      <Navbar />
      <Box w="100%" bg="white" h="450px" pt="20px">
        <Box textAlign="center" w="55%" m="auto" pb={30}>
          <Text fontSize="60px" fontWeight="bold">
            Today's most popular brands are rocking it with us.
          </Text>
        </Box>
        <Box textAlign="center" w="45%" fontSize={20} m="auto">
          <Text>
            Campaign Monitor is powering successful email marketing for small
            and medium-sized global businesses with big goals. Click on any of
            the logos below to see how our easy-to-use automation tools help our
            customers stand out in a crowded inbox.
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
      <Tryfree
        heading="Get started with Campaign Monitor today."
        text="With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing"
      />
      <Footer />
    </>
  );
};

export default Customer;
