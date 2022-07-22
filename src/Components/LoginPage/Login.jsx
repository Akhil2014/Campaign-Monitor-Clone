import { Box, Heading, Stack } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'

const Login = () => {
  return (
    <Box>
      <Navbar />
      <Stack bg="aliceblue" h="400px">
          <Heading>Login</Heading>
      </Stack>
      <Footer />
    </Box>
  )
}

export default Login