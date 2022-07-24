import {
  Alert,
  Box,
  Button,
  Container,
  Divider,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  Select,
  Stack,
  Text,
} from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import Footer from "../Footer/Footer";
import Faq from "../GalleryPage/Faq";
import Tryfree from "../GalleryPage/Tryfree";
import Navbar from "../Navbar/Navbar";
import { Grid, GridItem } from "@chakra-ui/react";
import DataBox from "./DataBox";
import { AiOutlineMail } from "react-icons/ai";
import { BsArrowRight, BsClock } from "react-icons/bs";

const Resource = () => {
  const [size, setsize] = useState("3500px");
  const arr = [
    {
      id:1,
      heading:"5 SMS Marketing Examples Your Audience Actually Wants to Receive",
      title:"SMS is an essential marketing channel for all kinds of businesses. But, it can be...",
      img:"https://images.pexels.com/photos/265087/pexels-photo-265087.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:2,
      heading:"What Makes NYT’s “The Morning” Newsletter One of the Most Popular in the World",
      title:"Let’s break down the secrets to success behind The New York Times’ The Morning...",
      img:"https://images.pexels.com/photos/185576/pexels-photo-185576.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:3,
      heading:"How to Find the Best Time to Send an Email Newsletter to Your Audience",
      title:"It’s the age-old debate of every email marketing conversation: “when is the best time to...",
      img:"https://images.pexels.com/photos/590016/pexels-photo-590016.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:4,
      heading:"The Ultimate Guide to Writing Your First Email Newsletter",
      title:"Email newsletters often don’t bring immediate conversions or sales. They take significant time and... ",
      img:"https://images.pexels.com/photos/270637/pexels-photo-270637.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:5,
      heading:"What to Put in Your Email Footer +5 Examples We Love",
      title:"When it comes to email marketing, you probably spend most of your time thinking about the message...",
      img:"https://images.pexels.com/photos/327540/pexels-photo-327540.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:6,
      heading:"How Amanda Natividad Got Her First 1,000 Newsletter Subscribers",
      title:"When Amanda Natividad started her newsletter, the VP of marketing at SparkToro and classically...",
      img:"https://images.pexels.com/photos/533424/pexels-photo-533424.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:7,
      heading:"7 SMS Marketing Best Practices to Know Before You Hit “Send”",
      title:"SMS marketing has quickly become an essential channel for businesses. Here are seven...",
      img:"https://images.pexels.com/photos/67112/pexels-photo-67112.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:8,
      heading:"6 SMS Marketing Tips for Copywriting (With Examples)",
      title:"Copywriting can make or break the success of your SMS marketing campaign.",
      img:"https://images.pexels.com/photos/303383/pexels-photo-303383.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:9,
      heading:"Grow Your SMS Marketing List With These 5 Steps",
      title:"Growing your SMS marketing list can be tricky for a number of reasons. Let’s break...",
      img:"https://images.pexels.com/photos/262470/pexels-photo-262470.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:10,
      heading:"The 17 Best Low-Budget and Free Email Testing Tools for 2022",
      title:"Testing is critical to email marketing success. Here are some of our favorite email...",
      img:"https://images.pexels.com/photos/3194523/pexels-photo-3194523.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:11,
      heading:"The Current State of MPP: Where Are We Now?",
      title:"It’s been about six months since Apple released MPP to the public — going live in...",
      img:"https://images.pexels.com/photos/3806753/pexels-photo-3806753.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:12,
      heading:"10 Tips for Surefire Survey Email Subject Lines (plus examples!)",
      title:"Learn how to write a survey email subject line that gets your emails opened...",
      img:"https://images.pexels.com/photos/6476808/pexels-photo-6476808.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:13,
      heading:"The Top 5 Benefits of Combining Email Marketing with SMS",
      title:"Combining email marketing with SMS packs a pretty potent punch.",
      img:"https://images.pexels.com/photos/7661068/pexels-photo-7661068.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:14,
      heading:"15 of the Best Email Newsletter Examples We’ve Ever Seen (and Why They Work)",
      title:"Your email newsletter is one of your most powerful marketing channels...",
      img:"https://images.pexels.com/photos/5882705/pexels-photo-5882705.jpeg?auto=compress&cs=tinysrgb&w=600"
    },
    {
      id:15,
      heading:"Email Marketing vs. SMS Marketing: You’re Asking the Wrong Question",
      title:"Asking if email marketing or SMS marketing is more effective is like asking...",
      img:"https://images.pexels.com/photos/3184611/pexels-photo-3184611.jpeg?auto=compress&cs=tinysrgb&w=600"
    }
  ]
  return (
    <>
      <Navbar />
      <Box w="100%" h={size} bg="#f6f6f7">
        <Box w="100%" h="auto" textAlign="center" pt="50px">
          <Heading pb="10px" as="h2" size="3xl">
            The Marketing Resources Hub
          </Heading>
          <Text fontSize="20px">
            Everything you need for digital and email marketing that's on point.
          </Text>
        </Box>
        <Flex
          justifyContent="space-between"
          bg="white"
          w="100%"
          h="auto"
          mt="50px"
          px="10rem"
        >
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            borderBottom="5px Solid #9676ff"
          >
            {" "}
            All
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            BLOG
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            GUIDES
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            INFOGRAPHICS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            COLLECTION
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            WEBNIARS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            EVENTS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            VIDEOS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            COMPARISONS
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            KNOWLEDGE BASE
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            GLOSSARY
          </Button>
          <Button
            bg="none"
            position="none"
            borderRadius="none"
            _hover={{ borderBottom: "5px Solid #9676ff" }}
          >
            TOOLS
          </Button>
        </Flex>

        <Flex w="100%" h="600px" justifyContent="space-evenly" pt="40px">
          <Box bg="white" w="50%" h="90%" boxShadow="lg" cursor="pointer" _hover={{boxShadow:'dark-lg'}} >
            <Stack w="100%" h="100%">
              <Box h="72%" w="100%" borderBottom="2px solid gray" >
                <Image w="100%" h="100%" src="https://images.pexels.com/photos/905163/pexels-photo-905163.jpeg?auto=compress&cs=tinysrgb&w=600" />
              </Box>
              <Box p="10px">
                <HStack color="gray">
                  <BsClock />
                  <Text> 2 minute read time </Text>
                </HStack>
                <Heading as="h3" size="md" py="0.5rem">
                 Introducing Campaign Moniter SMS: a New way to Connect and Convert
                </Heading>
                <Text>
                Today, audiences expect a lot from the brands they interact with. They want personalized, relevant communications delivered in a format that’s convenient, at a time that suits them.
                </Text>
              </Box>
            </Stack>
          </Box>
          <Stack w="25%" h="90%" gap="2.7rem">
            <Box w="100%" h="48%" bg="aliceblue" boxShadow="lg"cursor="pointer"  _hover={{boxShadow:'dark-lg'}}>
              <Stack p="1rem" boxShadow="lg" borderTopRightRadius={10} borderBottomRightRadius={10} bg="white" w="90%" h="80%" mt="1.3rem">
                  <Text fontWeight="bold" fontSize="23px" color="black">Get email insights delivered straight to your inbox.</Text>
                  <Button borderRadius={3} colorScheme="purple" h="60px" w="200px" color="white">Subscirbe</Button>
              </Stack>
            </Box>
            <Box color="white" cursor="pointer" w="100%" h="48%" bg="#9676ff" boxShadow="lg" p="2rem"_hover={{boxShadow:'dark-lg'}} >
              <AiOutlineMail color="white" size="30px" />
              <Text fontWeight="bold"  fontSize="23px" py="0.6rem">Try Campaign Moniter today</Text>
              <Text fontWeight="bold" >Send Newsletter, build campaigns, and build your audience with our easy-yet-powerful platform</Text>
              <HStack  fontWeight="bold" pt="5px" color="white">
                  <Text>Sign up for free </Text>  <BsArrowRight />
                </HStack>
            </Box>
          </Stack>
        </Flex>

        <Container mt="5rem">
          <Heading>Browse our resource library</Heading>
        </Container>

        <Box w="100%" h="300px">
          <Flex w="100%" px="8rem" pt="6rem" gap="30px">
            <Box h="50px" w="70%">
              <Input
                h="50px"
                b=" 4px solid black"
                variant="flushed"
                placeholder="Search Resources"
              />
            </Box>
            <Box h="50px" w="30%">
              <Select
                rounded="none"
                b=" 4px solid black"
                placeholder="Filter by topic"
                h="50px"
              >
                <option value="coding">Coding</option>
                <option value="social">Social Media</option>
                <option value="ecommerce">Ecommerce</option>
              </Select>
            </Box>
          </Flex>

          <Grid
            templateColumns="repeat(3, 1fr)"
            templateRows="auto"
            gap={5}
            w="100%"
            h="auto"
            mt="2rem"
            px="8rem"
            pt="1rem"
          >
            {
              arr.map(({img,heading,title,id}) => (
                <DataBox key={id} src={img} heading={heading} title={title} />
              ))
            }
          </Grid>

          <Box w="100%" bg="#9767ff" textAlign="center" mt="5rem">
            <Container>
              <HStack>
                <Text fontSize={20}>
                  Get the latest marketing trends in our newsletter.
                </Text>
                <Button w="200px" h="45px">
                  Subscibe
                </Button>
              </HStack>
            </Container>
          </Box>
        </Box>
      </Box>
      <Faq show={true} title="Learn how to send more effective emails. " />
      <Tryfree
        heading="Get started with Campaign Monitor today."
        text="With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing"
      />
      <Footer />
    </>
  );
};

export default Resource;
