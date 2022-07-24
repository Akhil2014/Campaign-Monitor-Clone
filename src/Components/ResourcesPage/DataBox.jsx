import { Box, Heading, HStack, Image, Stack, Text } from '@chakra-ui/react'
import React from 'react'
import { BsClock } from "react-icons/bs";

const DataBox = ({src,heading, title}) => {
  return (
    <Stack w="380px" h="400px" bg="white" boxShadow='xl' _hover={{boxShadow:'dark-lg'}}>
        <Box w="100%" h="50%">
            <Image w="100%" h="100%" src={src} alt='akhil' />
        </Box>
        <Box w="100%" h="50%" bg="white" p="1.5rem">
            <HStack color="gray">
                <BsClock/>
            <Text> 6 minute read time </Text>
            </HStack>
            <Heading  as='h3' size='md'>{heading}</Heading>
            <Text>{title}</Text>
            
        </Box>
    </Stack>
  )
}

export default DataBox