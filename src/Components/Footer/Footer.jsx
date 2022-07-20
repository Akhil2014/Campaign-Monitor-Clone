import {
  Box,
  Button,
  Divider,
  Flex,
  Heading,
  Stack,
  HStack,
  Text,
} from "@chakra-ui/react";
import { SiCampaignmonitor } from "react-icons/si";
import { BsLinkedin, BsTwitter, BsFacebook, BsInstagram } from "react-icons/bs";
import React from "react";

const Footer = () => {
  return (
    <Box w="100%" h="610px" bg="#111324">
      <Box h="100%" w="85%" m="auto" pt="40px">
        <Flex w="85vw" h="32vh" justifyContent="space-between">
          <Stack w="300px" h="100%" flexDirection="row" pt="10px" gap="5px">
            <Box mt="9px">
              <SiCampaignmonitor size="24px" color="#7856ff" />{" "}
            </Box>
            <Heading
              _hover={{ cursor: "pointer" }}
              color="white"
              as="h1"
              size="md"
            >
              Campaign Moniter
            </Heading>
          </Stack>
          <Flex w="50%" h="100%" justifyContent="space-between"  pt="20px">
            <Stack textAlign="left" width="20%" borderRadius={5} h="100%">
              <Heading cursor="pointer" color="gray" as="h4" size="sm">
                PRODUCT
              </Heading>
              <Text cursor="pointer" color="white" fontSize="xs">
                Features
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Pricing
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Integrations
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                API
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Email Templates
              </Text>
            </Stack>
            <Stack textAlign="left" width="24%" borderRadius={5} h="100%">
              <Heading cursor="pointer" color="gray" as="h4" size="sm">
                EMAIL MARKETING
              </Heading>
              <Text cursor="pointer" color="white" fontSize="xs">
                Agencies
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Retail
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Nonprofit
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Entertainment
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Publishing
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Technology
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Travel
              </Text>
            </Stack>
            <Stack textAlign="left" width="20%" borderRadius={5} h="100%">
              <Heading cursor="pointer" color="gray" as="h4" size="sm">
                COMMUNITY
              </Heading>
              <Text cursor="pointer" color="white" fontSize="xs">
                Get Started
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Customers
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Resources
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Blog
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Email Academy
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Support
              </Text>
            </Stack>
            <Stack textAlign="left" width="24%" borderRadius={5} h="100%">
              <Heading cursor="pointer" color="gray" as="h4" size="sm">
                COMPANY
              </Heading>
              <Text cursor="pointer" color="white" fontSize="xs">
                About us
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Leadership
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Trust Center
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Careers
              </Text>
              <Text cursor="pointer" color="white" fontSize="xs">
                Modern slavery Statement
              </Text>
            </Stack>
          </Flex>
        </Flex>
        <Divider mt="20px" />
        <Flex m="auto" w="85vw" h="35vh" mt="20px" direction="column" gap="50px">
          <Flex w="100%" h="70px" justifyContent="space-between" >
            <Box>
              <Button borderRadius={3} colorScheme="purple" h="60px" w="230px" color="white">
                Get the latest content
              </Button>
            </Box>
            <HStack w="50%" h="30px" justifyContent="space-between">
              <HStack h="100%" w="150px">
                <BsLinkedin  cursor="pointer"  color="gray" />
                <BsTwitter cursor="pointer"  color="gray" />
                <BsFacebook  cursor="pointer" color="gray" />
                <BsInstagram cursor="pointer"  color="gray" />
              </HStack>
              <HStack h="100%" w="500px">
                <Text color="gray" fontSize="xs">
                  Terms & Policies{" "}
                  <Divider as="span" mx="5px" orientation="vertical" /> Do not
                  sell my personal information© 2022 All Rights Reserved
                </Text>
              </HStack>
            </HStack>
          </Flex>
          <Box w="100%" h="100px" textAlign="center">
            <Text color="gray">Campaign Monitor is part of the CM Group family of brands.</Text>
            <Heading color="white" size="md" mt="20px" ><Box color="black" as="span" p="3px" bg="white">CM</Box> Group</Heading>
            
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Footer;
