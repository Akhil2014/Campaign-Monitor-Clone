import React from "react";
import {
  Center,
  Flex,
  Heading,
  Spacer,
  Stack,
  Text,
  HStack,
  Button,
} from "@chakra-ui/react";
import { SiCampaignmonitor } from "react-icons/si";

const Navbar = () => {
  return (
    <Flex w={["100%","100%","100%","100%"]} h="78px" bg="#111324" justifyContent="space-evenly">
      <Stack pt="26px" direction="row" w="220px">
        <SiCampaignmonitor size="25px" color="#7856ff" />{" "}
        <Heading color="white" as="h1" size="md" alignItems="center">
          Campaign Moniter
        </Heading>
      </Stack>
      <Stack
        pt="23px"
        pl="10px"
        direction="row"
        spacing={6}
        w="600px"
        color="gray.400"
      >
        <Text fontSize="xl">Features</Text>
        <Text fontSize="xl">Pricing</Text>
        <Text fontSize="xl">Resources</Text>
        <Text fontSize="xl">Customers</Text>
        <Text fontSize="xl">Gallery</Text>
        <Text fontSize="xl">Agencies</Text>
      </Stack>
      <Stack color="gray.400" pt="18px"  direction="row" spacing={6} w="300px">
        <Text pt="5px"  fontSize="xl">Contact Us</Text>
        <Text  pt="5px" fontSize="xl">Log in</Text>
        <Button mt="20px" bg="#51cfdb" color="black">
          Try it free
        </Button>
      </Stack>
    </Flex>
  );
};

export default Navbar;
