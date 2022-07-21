import React from "react";
import {
  Flex,
  Heading,
  Stack,
  Text,
  Button,
  Spacer,
} from "@chakra-ui/react";
import { SiCampaignmonitor } from "react-icons/si";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <Flex position="" w="100%" h="78px" bg="#111324" justifyContent="space-evenly">
       <NavLink to="/"><Stack pt="26px" direction="row" w="220px">
        <SiCampaignmonitor  size="24px" color="#7856ff" />{" "}
       /<Heading  _hover={{cursor:"pointer"}} color="white" as="h1" size="md">
          Campaign Moniter
        </Heading>
      </Stack></NavLink>
      <Stack
        pt="23px"
        pl="10px"
        direction="row"
        spacing={6}
        w="600px"
        color="gray.400"
      >
        <Text _hover={{color:"#51cfdb",cursor:"pointer"}} fontSize="xl">Features</Text>
        <Text _hover={{color:"#51cfdb",cursor:"pointer"}} fontSize="xl">Pricing</Text>
       <NavLink to="/resource"><Text _hover={{color:"#51cfdb",cursor:"pointer"}} fontSize="xl">Resources</Text></NavLink> 
       <NavLink to="/customer"><Text _hover={{color:"#51cfdb",cursor:"pointer"}} fontSize="xl">Customers</Text></NavLink>
        <NavLink to="/gallery"><Text _hover={{color:"#51cfdb",cursor:"pointer"}} fontSize="xl">Gallery</Text></NavLink>
        <NavLink to="/agencies"><Text _hover={{color:"#51cfdb",cursor:"pointer"}} fontSize="xl">Agencies</Text></NavLink>
      </Stack>
      <Stack color="gray.400" pt="18px"  direction="row" spacing={6} w="300px">
       <NavLink to="/contact"><Text _hover={{color:"#51cfdb",cursor:"pointer"}} pt="5px"  fontSize="xl">Contact Us</Text></NavLink> 
       <NavLink to="/login"><Text _hover={{color:"#51cfdb",cursor:"pointer"}}  pt="5px" fontSize="xl">Log in</Text></NavLink> 
        <Button  _active="none" _hover="none" mt="20px" bg="#51cfdb" color="black">
          Try it free
        </Button>
      </Stack>
    </Flex>
  );
};

export default Navbar;
