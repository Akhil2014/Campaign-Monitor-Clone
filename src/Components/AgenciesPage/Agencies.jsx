import { Box, Text } from '@chakra-ui/react'
import React from 'react'
import Footer from '../Footer/Footer'
import Faq from '../GalleryPage/Faq'
import Tryfree from '../GalleryPage/Tryfree'
import Navbar from '../Navbar/Navbar'

const Agencies = () => {
  return (
    <>
    <Navbar />
    <Tryfree heading="Get started with Campaign Monitor today." text="With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing" />
    <Footer />
  </>
  )
}

export default Agencies