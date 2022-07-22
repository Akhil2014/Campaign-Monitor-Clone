import { Box, Button, Container, Flex, Heading, Spacer, Text } from "@chakra-ui/react";
import React, { useRef } from "react";
import Footer from "../Footer/Footer";
import Tryfree from "../GalleryPage/Tryfree";
import Navbar from "../Navbar/Navbar";
import Details from "./Details";

const Customer = () => {
  return (
    <>
    <Box w="100%" h="auto">
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

      <Flex
        w="100%"
        h="60px"
        bg="white"
        boxShadow="2xl"
        my="2rem"
        justifyContent="space-evenly"
        alignItems="center"
      >
        <Button
          bg="none"
          color="#9676ff"
          position="none"
          _hover={{ bg: "none" }}
        >
          NONPROFIT
        </Button>
        <Button
          bg="none"
          color="#9676ff"
          position="none"
          _hover={{ bg: "none" }}
        >
          MEDIA AND PUBLISHING
        </Button>
        <Button
          bg="none"
          color="#9676ff"
          position="none"
          _hover={{ bg: "none" }}
        >
          RETAIL
        </Button>
        <Button
          bg="none"
          color="#9676ff"
          position="none"
          _hover={{ bg: "none" }}
        >
          ENTERTAINMENT
        </Button>
        <Button
          bg="none"
          color="#9676ff"
          position="none"
          _hover={{ bg: "none" }}
        >
          TRAVEL AND HOSPITALITY
        </Button>
        <Button
          bg="none"
          color="#9676ff"
          position="none"
          _hover={{ bg: "none" }}
        >
          AGENCIES
        </Button>
      </Flex>

      <Details
        name="Nonprofit"
        heading=" Connect more donors to your cause in more meaningful ways."
        title=" Nonprofits need to make every penny count and email marketing is a cost-efficient, nimble way to update donors, past and present on needs and accomplishments."
      />
      <Details
        name="Media and Publishing"
        heading=" Email—the new king of all media marketing."
        title="  Email marketing is like rocket fuel for media and publishing. It gets
          more eyes on the content, boosts audience engagement, and the bottom
          line."
      />
      <Container textAlign="center" maxW="750px" h="200px">
        <Heading py="3rem" size="md">Join the thousands of companies that are seeing success with Campaign Monitor.</Heading>
        <Button _hover={{bg:"#9676ff"}} bg="#9676ff" color="white" w="20rem">Get started with free</Button>
      </Container>
      <Details
        name="Retail"
        heading=" Email marketing helps retailers get the word out."
        title=" Sales, promos, markdowns, new items in store—email is the single best way to connect with customers in a targeted and relevant way."
      />
      <Details
        name="Entertainment"
        heading="Campaign Monitor helps raise the roof at events and concerts."
        title="  Sold-out shows, hit albums, theater events that are standing room only—email marketing spreads the news, and sells more tickets."
      />
      <Details
        name="Travel and Hospitality"
        heading=" Your passport to success in the travel business."
        title=" Email marketing helps keep rooms booked, restaurants filled and people coming to special events. Keep connected to your most loyal fans and they’ll keep coming back for more."
      />
      <Details
        name="Agencies"
        heading=" Built by agencies, for agencies"
        title=" The agency perspective is baked into our DNA—and our code. Campaign Monitor makes it easy to manage your accounts and orchestrate campaigns, all from one dashboard."
      />
      <Tryfree
        heading="Get started with Campaign Monitor today."
        text="With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing"
      />
      <Footer />
      </Box>
    </>
  );
};

export default Customer;
