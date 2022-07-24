import React, { useContext } from "react";
import { Flex, Heading, Stack, Text, Button, Spacer } from "@chakra-ui/react";
import { SiCampaignmonitor } from "react-icons/si";
import { Navigate, NavLink } from "react-router-dom";
import { AppContext } from "../../ContextAPI/AppContext";

const Navbar = () => {
  let activeStyle = {
    color: "#51cfdb",
  };
  let nonActiveStyle = {
    color: "gray",
  };
  const { state , handleLogout } = useContext(AppContext);
  return (
    <Flex
      position=""
      w="100%"
      h="78px"
      bg="#111324"
      justifyContent="space-evenly"
    >
      <NavLink to="/">
        <Stack pt="26px"  direction="row" w="220px">
          <SiCampaignmonitor size="24px" color="#7856ff" /> /
          <Heading
            _hover={{ cursor: "pointer" }}
            color="white"
            as="h1"
            size="md"
          >
            Campaign Moniter
          </Heading>
        </Stack>
      </NavLink>
      <Stack
        pt="23px"
        pl="10px"
        direction="row"
        spacing={6}
        w="600px"
        color="gray.400"
      >
        <Text _hover={{ color: "#51cfdb", cursor: "pointer" }} fontSize={["sm","md","lg","xl"]}>
          Features
        </Text>
        <Text _hover={{ color: "#51cfdb", cursor: "pointer" }} fontSize={["sm","md","lg","xl"]}>
          Pricing
        </Text>
        <NavLink to="/resource" style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}>
          <Text _hover={{ color: "#51cfdb", cursor: "pointer" }} fontSize={["sm","md","lg","xl"]}>
            Resources
          </Text>
        </NavLink>
        <NavLink to="/customer" style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}>
          <Text _hover={{ color: "#51cfdb", cursor: "pointer" }} fontSize={["sm","md","lg","xl"]}>
            Customers
          </Text>
        </NavLink>
        <NavLink to="/gallery" style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}>
          <Text _hover={{ color: "#51cfdb", cursor: "pointer" }} fontSize={["sm","md","lg","xl"]}>
            Gallery
          </Text>
        </NavLink>
        <NavLink to="/agencies" style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}>
          <Text _hover={{ color: "#51cfdb", cursor: "pointer" }} fontSize={["sm","md","lg","xl"]}>
            Agencies
          </Text>
        </NavLink>
      </Stack>
      <Stack color="gray.400" pt="18px" direction="row" spacing={6} w="300px">
        <NavLink to="/contact" style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}>
          <Text
           display={["none","none","none","flex"]}
            _hover={{ color: "#51cfdb", cursor: "pointer" }}
            pt="5px"
            fontSize="xl"
          >
            Contact Us
          </Text>
        </NavLink>
        <NavLink to="/login" style={({ isActive }) => (isActive ? activeStyle : nonActiveStyle)}>
          <Text
           display={["none","none","block","flex"]}
            _hover={{ color: "#51cfdb", cursor: "pointer" }}
            pt="5px"
            fontSize="xl"
          >
            Log in
          </Text>
        </NavLink>
        <Button
          onClick={() => handleLogout()}
          display={["none","none","block","flex"]}
          _active="none"
          _hover="none"
          mt="20px"
          bg="#51cfdb"
          color="black"
        >
       {(state.isAuth === true)?"Logout":"Try it free"}
        </Button>
      </Stack>
    </Flex>
  );
};

export default Navbar;
