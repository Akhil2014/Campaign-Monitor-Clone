import { Box, Grid, GridItem, Text } from '@chakra-ui/react'
import React from 'react'
import { FaGreaterThan } from "react-icons/fa";


const AllFaq = ({showNot}) => {
  return (
    <Grid templateColumns='repeat(3, 1fr)' gap={3} w="100%" h="80%"  mt="20px"p="10px">
  <GridItem w='100%' h='120' >
    <Text fontSize="20px">Email Newsletter </Text>
    <Text color="gray">The email newsletter is the most effective way to keep your audience updated on your latest company news.</Text>
  { (showNot === true)?<Text color="#9767ff" cursor="pointer" my="10px" fontSize="24px">Download the report </Text>:""}
  </GridItem> 
  <GridItem w='100%' h='120'  >
  <Text fontSize="20px">Welcome Email </Text>
    <Text color="gray">The welcome email is the first step in onboarding customers and gives them a warm introduction to your community.</Text>
    { (showNot === true)?<Text color="#9767ff" cursor="pointer" my="10px" fontSize="24px">Download the report</Text>:""}
  </GridItem> 
  <GridItem w='100%' h='120'>
  <Text fontSize="20px">Email Invites </Text>
    <Text color="gray">Send targeted, personalized email invitations that will inspire all of your recipients to attend your events.</Text>
    { (showNot === true)?<Text color="#9767ff" cursor="pointer" my="10px" fontSize="24px">Download the report</Text>:""}
  </GridItem> 
  <GridItem w='100%' h='120'>
  <Text fontSize="20px">Promotional Email </Text>
    <Text color="gray">Entice your audience with special offers, deals, and promotions to generate additional revenue back to the business all year long.</Text>
    { (showNot === true)?<Text color="#9767ff" cursor="pointer" my="10px" fontSize="24px">Download the report</Text>:""}
  </GridItem> 
  <GridItem w='100%' h='120'>
  <Text fontSize="20px">Survey Email </Text>
    <Text color="gray">Want to know what your customers think? Send an email and ask. Email is the #1 channel for collecting customer feedback.</Text>
    { (showNot === true)?<Text color="#9767ff" cursor="pointer" my="10px" fontSize="24px">Download the report </Text>:""}
  </GridItem> 
  <GridItem w='100%' h='120'>
  <Text fontSize="20px">Product Announcement Email </Text>
    <Text color="gray">Unveil your most recent products and company news with effective email campaigns that are sure to excite your audience.</Text>
    { (showNot === true)?<Text color="#9767ff" cursor="pointer" my="10px" fontSize="24px">Download the report </Text>:""}
  </GridItem> 
    </Grid>
  )
} 

export default AllFaq