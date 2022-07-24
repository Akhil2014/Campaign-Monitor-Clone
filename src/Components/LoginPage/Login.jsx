import {
  Box,
  Button,
  Container,
  Heading,
  Input,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AppContext } from "../../ContextAPI/AppContext";
import Footer from "../Footer/Footer";
import Navbar from "../Navbar/Navbar";

const Login = () => {
  const [formState, setFormSate] = useState({
    email: "",
    password: "",
  });

  const { handleLogin } = useContext(AppContext);
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormSate({
      ...formState,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    fetch("https://reqres.in/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formState),
    })
      .then((res) => res.json())
      .then((res) => {
        handleLogin(res.token);
        navigate("/resource");
      });
      console.log(formState)
  };

  return (
    <Box bgGradient="linear(to-r, purple.200, gray.500)">
      <Navbar />
      <Box textAlign="center" w="100%" h="auto" mb="3rem">
        <Heading
          onClick={() => alert("Please fill the form")}
          _hover={{ color: "white", cursor: "pointer" }}
        >
          Log In
        </Heading>
        <Container
          mt="2rem"
          rounded="1rem"
          boxShadow="dark-lg"
          py="4rem"
          bg="aliceblue"
          h="auto"
        >
          <Input
            value={formState.email}
            onChange={handleChange}
            name="email"
            my="1rem"
            placeholder="Enter your email"
            size="lg"
          />
          <Input
            value={formState.password}
            onChange={handleChange}
            name="password"
            my="1rem"
            placeholder="Enter your password"
            size="lg"
          />
          <Button
            onClick={handleSubmit}
            my="1rem"
            w="100%"
            _hover={{ color: "white" }}
            bg="#9676ff"
            size="lg"
          >
            {" "}
            LOG IN{" "}
          </Button>
          <Text color="gray">Can’t remember your password?</Text>
        </Container>
      </Box>
      <Footer />
    </Box>
  );
};

export default Login;
