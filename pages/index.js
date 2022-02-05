import Head from 'next/head'
import styles from '../styles/Home.module.css'
import { Box, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'


const Home = () => {

  const { newTimerIsOpen, newTimerOnOpen, newTimerOnClose } = useDisclosure();

  return (
    <Box userSelect="none" minH="100vh" >
      <Head>
        <title>Tomato RPG</title>
        <meta name="description" content="Simple Pomodoro RPG" />
        <link rel="icon" href="/tomato.svg" />
      </Head>
      <Box bgGradient="linear(to-r, orange.600, red.600)" minW="100vw" >
        <Center>
          <Flex color="whitesmoke" padding="1rem" w="sm"  justify="space-between" align="center">
            <Flex align="center">
              <Image h="8" w="8" src="/coin.svg" alt="Coin"></Image>
              <Heading padding=".5rem" size="lg" fontWeight="light">12345</Heading>
            </Flex>
            <Flex aria-label='energy'>
              <Image h="8" w="8" src="/lightningEmpty.svg" alt="Empty Energy"></Image>
              <Image h="8" w="8" src="/lightning.svg" alt="Full Energy"></Image>
              <Image h="8" w="8" src="/lightning.svg" alt="Full Energy"></Image>
            </Flex>
          </Flex>
        </Center>
      </Box>
      <Box>
        <Center>
          <Heading margin=" 0 0 1rem 0" padding="1rem" size="4xl" bgGradient="linear(to-b, orange.400, red.400)" bgClip="text">Tomato RPG</Heading>
        </Center>
      </Box>
      
      <Box >
        <Center>
          <Flex w="sm" justify="center" align="center">
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Image h="12" w="12" src="/basket.svg" alt="Basket"></Image></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Image h="12" w="12" src="/blueBook.svg" alt="Blue Book"></Image></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Image h="12" w="12" src="/shoppingCart.svg" alt="Shopping Cart"></Image></Button>
          </Flex>
        </Center>
        <Center>
          <Flex borderRadius="8" w="sm" justify="center">
            <Button borderRadius="50%" colorScheme="blue" h="48" w="48" margin=".5rem" onClick={newTimerOnOpen}><Image h="24" w="24" src="/timerClock.svg" alt="Timer Clock"></Image></Button>
            <Button borderRadius="50%" colorScheme="teal" h="32" w="32" margin=".5rem"><Image h="16" w="16" src="/hotBeverage.svg" alt="Hot Beverage"></Image></Button>
          </Flex>
        </Center>
      </Box>
      <Button onClick={newTimerOnOpen}>Open Modal</Button>
      <Modal isOpen={newTimerIsOpen} onClose={newTimerOnClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Create New Timer</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <Heading>Select your vegetable</Heading>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr="3" onClick={newTimerOnClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </Box>
    
  )
}

export default Home;