import { Box, Heading, Stack } from "@chakra-ui/react";
import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Contact = () => {
  return (
    <Box>
      <Navbar />
      <Stack bg="aliceblue" h="400px">
          <Heading>Contact</Heading>
      </Stack>
      <Footer />
    </Box>
  );
};

export default Contact;
