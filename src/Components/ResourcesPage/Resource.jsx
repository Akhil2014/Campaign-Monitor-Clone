import React from 'react'
import Footer from '../Footer/Footer'
import Faq from '../GalleryPage/Faq'
import Tryfree from '../GalleryPage/Tryfree'
import Navbar from '../Navbar/Navbar'

const Resource = () => {
  return (
    <>
      <Navbar />
      <Faq show={true} title="Learn how to send more effective emails. "/>
      <Tryfree heading="Get started with Campaign Monitor today." text="With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing" />
      <Footer />
    </>
  )
}

export default Resource