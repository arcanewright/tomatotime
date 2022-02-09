import Head from 'next/head'
import { Box, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'

const Home = () => {

  return (
    <Box userSelect="none" minH="100vh">
      <Head>
        <title>Tomato RPG</title>
        <meta name="description" content="Simple Pomodoro RPG" />
        <link rel="icon" href="/tomato.svg" />
      </Head>
      <Box bgGradient="linear(to-r, orange.600, red.600)" minW="100vw" >
        <Center>
          <Flex color="whitesmoke" padding="1rem" w="sm"  justify="space-between" align="center">
            <Flex align="center">
              <Box h="8" w="8" bgImg="/coin.svg" alt="Coin"></Box>
              <Heading padding=".5rem" size="lg" fontWeight="light">12345</Heading>
            </Flex>
            <Flex aria-label='energy'>
              <Box h="8" w="8" bgImg="/lightningEmpty.svg" alt="Empty Energy"></Box>
              <Box h="8" w="8" bgImg="/lightningEmpty.svg" alt="Empty Energy"></Box>
              <Box h="8" w="8" bgImg="/lightning.svg" alt="Full Energy"></Box>
              <Box h="8" w="8" bgImg="/lightning.svg" alt="Full Energy"></Box>
            </Flex>
          </Flex>
        </Center>
      </Box>
      <Box>
        <Center>
          <Heading margin=" 0 0 1rem 0" padding="1rem" size="4xl" bgGradient="linear(to-b, orange.400, red.400)" bgClip="text">Tomato RPG</Heading>
        </Center>
      </Box>
      
      <Box>
        <Center>
          <Flex w="sm" justify="center" align="center">
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Box h="12" w="12" bgImg="/basket.svg" alt="Basket"></Box></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Box h="12" w="12" bgImg="/blueBook.svg" alt="Blue Book"></Box></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Box h="12" w="12" bgImg="/shoppingCart.svg" alt="Shopping Cart"></Box></Button>
          </Flex>
        </Center>
        <Center>
          <Flex borderRadius="8" w="sm" justify="center">
            <CreateTimer></CreateTimer>
            <CreateBreak></CreateBreak>
          </Flex>
        </Center>
      </Box>
    </Box>
    
  )
}

const CreateTimer = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button borderRadius="50%" colorScheme="blue" h="48" w="48" margin=".5rem" onClick={onOpen}><Box h="24" w="24" bgImage="/timerClock.svg" alt="Timer Clock"></Box></Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Start New Timer</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <Center><Flex align="center" justify="center"><Button></Button><Box h="16" w="16"><Image src="/tomato.svg" alt="tomato"></Image></Box><Button></Button></Flex></Center>
            <Center><Flex align="center" justify="center"><Button></Button><Heading>75:00</Heading><Button></Button></Flex></Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr="3" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const CreateBreak = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button borderRadius="50%" colorScheme="teal" h="32" w="32" margin=".5rem" onClick={onOpen}><Box h="16" w="16" bgImage="/hotBeverage.svg" alt="Hot Beverage"></Box></Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Start Break</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <Heading>Select your vegetable</Heading>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="teal" mr="3" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Home;