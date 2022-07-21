import { Box, Heading } from "@chakra-ui/react";
import React from "react";
import AllFaq from "./AllFaq";

const Faq = ({title , show}) => {
  return (
    <Box h="500px" w="100%" p="80px">
      <Box textAlign="center">
        <Heading>{title}</Heading>
      </Box>
      <AllFaq showNot={show}/>
    </Box>
  );
};

export default Faq;
