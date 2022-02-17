import Head from 'next/head'
import { Box, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter } from '@chakra-ui/react'
import { useState } from 'react';

const Home = () => {

  const [defaultWorkTime, setDefaultBreakTime] = useState(25);

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
              <Box h="8" w="8" bgImg="/coin.svg" alt="Coin - Money"></Box>
              <Heading padding=".5rem" size="lg" fontWeight="light">12345</Heading>
            </Flex>
            {createEnergy(4)}
          </Flex>
        </Center>
      </Box>
      <Box>
        <Center>
          <Heading margin=" 0 0 1rem 0" padding="4" size="4xl" bgGradient="linear(to-b, orange.400, red.400)" bgClip="text">Tomato RPG</Heading>
        </Center>
      </Box>
      
      <Box>
        <Center>
          <Flex borderRadius="8" mb="8" w="sm" justify="center" align="center">
            <CreateTimer defaultTime={defaultWorkTime}></CreateTimer>
            <CreateBreak></CreateBreak>
          </Flex>
        </Center>
        <Center>
          <Flex w="sm" justify="center" align="center">
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Box h="12" w="12" bgImg="/basket.svg" alt="Basket - Inventory"></Box></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Box h="12" w="12" bgImg="/blueBook.svg" alt="Blue Book - Recipies"></Box></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Box h="12" w="12" bgImg="/shoppingCart.svg" alt="Shopping Cart - Store"></Box></Button>
          </Flex>
        </Center>
        <Center>
          <Flex w="sm" justify="center" align="center">
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Box h="12" w="12" alt="Empty"></Box></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Box h="12" w="12" alt="Empty"></Box></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem"><Box h="12" w="12" bgImg="/gear.svg" alt="Gear - Settings"></Box></Button>
          </Flex>
        </Center>
        
      </Box>
    </Box>
    
  )
}

const createEnergy = (num, max = 4) => {

  if (num > max) {
    throw(Error("Too much energy!"))
  }

  let empty = [];
  for (let i = 0; i < max-num; i++) {
    empty.push(<Box h="8" w="8" bgImg="/lightningEmpty.svg" alt="Empty Energy" key={"empty" + i}></Box>)
  }

  let full = [];
  for (let i = 0; i < num; i++) {
    full.push(<Box h="8" w="8" bgImg="/lightning.svg" alt="Full Energy" key={"full" + i}></Box>)
  }

  return (
    <Flex aria-label='energy'>
      {empty}
      {full}
    </Flex>
  )

}

const CreateTimer = (defaultTime = 25) => {
  const [time, setTime] = useState(defaultTime);
  const { isOpen, onOpen, onClose } = useDisclosure();

  const timeFormatted = (minutes) => {
    let result = "";
    if (minutes >= 10) {
      result = minutes + ":00"
    }
    else {
      result = "0" + minutes + ":00"
    }

    return result;
  }

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
            
            <Center><Button colorScheme="green" m="4"><Heading p="4">{timeFormatted(time)}</Heading></Button></Center>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr="3" onClick={onClose}>Close</Button>
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
      <Button borderRadius="50%" colorScheme="teal" h="32" w="32" margin=".5rem" onClick={onOpen}><Box h="16" w="16" bgImage="/hotBeverage.svg" alt="Hot Beverage" ></Box></Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Start Break</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <Button colorScheme="teal" m="3" mr="3.5" p="8"><Heading size="lg"> 5 mins</Heading></Button>
            <Button colorScheme="teal" m="3" p="8"><Heading size="lg">10 mins</Heading></Button>
            <Button colorScheme="teal" m="3" p="8"><Heading size="lg">15 mins</Heading></Button>
            <Button colorScheme="teal" m="3" p="8"><Heading size="lg">20 mins</Heading></Button>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="red" mr="3" onClick={onClose}>Close</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Home;