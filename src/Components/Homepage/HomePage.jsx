import {
  Box,
  Button,
  Flex,
  HStack,
  Image,
  Spacer,
  Stack,
  Text,
} from "@chakra-ui/react";
import Footer from "../Footer/Footer";
import Tryfree from "../GalleryPage/Tryfree";
import Navbar from "../Navbar/Navbar";

const HomePage = () => {
  return (
    <>
    <Navbar />
    <Box w="100%" h="2000px" bg="white" pt="100px">
      <Flex w="85%" h="650px" m="auto" justifyContent="space-between">
        <Stack w="45%" h="100%" gap="30px">
          <Text
            fontWeight="bold"
            fontSize={["3xl", "4xl", "5xl", "6xl"]}
            color="black"
          >
            Drive results with unforgettable email marketing.
          </Text>
          <Text fontSize="17px" color="grey">
            Connecting with your audience has never been easier with Campaign
            Monitor’s straightforward email marketing and automation tools.
          </Text>
          <Flex justifyContent="space-between" w="520px">
            <Button
             position="none"
              borderRadius={3}
              _hover="none"
              h="60px"
              w="250px"
              bg="#7856ff"
            >
              Sign up for free
            </Button>
            <Button
             position="none"
              borderRadius={3}
              _hover={{ bg: "#7856ff" }}
              variant="outline"
              borderColor="#7856ff"
              h="60px"
              w="250px"
            >
              Learn more
            </Button>
          </Flex>
        </Stack>
        <Box w="50%" h="500px">
          <Image w="100%" h="100%" src="Images\img1.jpg" alt="Books" fallbackSrc='https://via.placeholder.com/150' />
        </Box>
      </Flex>
      <Box w="100%" h="300px" bg="#f6f6f7" pt="80px">
        <Flex
          w="70%"
          h="70%"
          m="auto"
          direction="column"
          justifyContent="center"
        >
          <Box textAlign="center">
            <Text>
              Powering email marketing for businesses around the world.
            </Text>
          </Box>
          <HStack w="100%" h="80%">
            <Box w="25%" h="100%">
              <Image
                src="https://www.campaignmonitor.com/wp-content/themes/cm-theme/assets/images/logo-strip/ripcurl-2.png?ver=2981658328797854"
                alt="loo"
              />
            </Box>
            <Box w="25%" h="100%"></Box>
            <Box w="25%" h="100%"></Box>
            <Box w="25%" h="100%"></Box>
          </HStack>
        </Flex>
      </Box>
      <Box w="100%" h="930px">
        <Box textAlign="center">
          <Text p="10" fontWeight="bold" fontSize="40px">
            Drag and drop your way to a beautiful email.
          </Text>
        </Box>
        <Flex w="100%" h="560px" bg="white" justifyContent="space-between">
          <Spacer />
          <Box pt="30px" textAlign="left" w="33%" h="500px">
            <Text fontWeight="bold">EASY OF USE</Text>
            <Text color="gray">
              Customize any template or design to showcase your brand using the
              simply powerful drag-and-drop email builder—no coding required.
            </Text>
            <br />
            <Text fontWeight="bold">COMPLETE CUSTOMIZATION</Text>
            <Text color="gray">
              Display your brand at its best with precise adjustments to every
              aspect of your campaign in the email builder.
            </Text>
            <br />
            <Text fontWeight="bold">MOBILE OPTIMIZATION</Text>
            <Text color="gray">
              Every template is responsive to mobile devices so you can send
              knowing your campaigns look great everywhere.
            </Text>
            <br />
            <Text fontWeight="bold">TEMPLATE MANAGEMENT FOR TEAMS</Text>
            <Text color="gray">
              Allow your email designer to lock sections of the template so that
              your team only updates what you want them to — ensuring your brand
              style and business critical information all stay intact.
            </Text>
          </Box>
          <Stack w="50%" h="500px">
            {/* <Image /> */}
          </Stack>
        </Flex>
        <Box w="100%" h="200px">
          <Box textAlign="center">
            <Text fontSize="20px">Eager to see it in action? Take a look.</Text>
          </Box>
          <Box textAlign="center">
            <Button
              position="none"
              borderRadius={3}
              _active="none"
              _hover="none"
              h="60px"
              w="210px"
              bg="#7856ff"
              mt="20px"
              color="white"
            >
              Get started for free
            </Button>
          </Box>
        </Box>
      </Box>
    </Box>
    <Tryfree heading="Get started with Campaign Monitor today." text="With our powerful yet easy-to-use tools, it's never been easier to make an impact with email marketing" />
    <Footer />
    </>
  );
};

export default HomePage;
