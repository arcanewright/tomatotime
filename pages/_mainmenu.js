import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';

const MainMenu = ({moveTo, setLastTimer, energy, money}) => {

    const [defaultWorkTime, setDefaultBreakTime] = useState(.0666666);
    const [previousVisit, setPreviousVisit] = useState();
    const { isOpen, onOpen, onClose} = useDisclosure();
    const [tutorialOpened, setTutorialOpened] = useState(false);
    const [tutorialDone, setTutorialDone] = useState(false);
  
    useEffect(() => {
  
      if (previousVisit && !tutorialOpened && !tutorialDone) {
        onOpen();
        setTutorialOpened(true);
      }
  
    })
  
    return (
      <>
        <Head>
          <title>Tomato RPG</title>
          <meta name="description" content="Simple Pomodoro RPG" />
          <link rel="icon" href="/tomato.svg" />
        </Head>
        <Box>
          <Center flexDirection="column">
            <Heading p="2" size="4xl" bgGradient="linear(to-b, orange.400, red.400)" bgClip="text">Tomato RPG</Heading>
            <Heading size="md" p="2">Welcome!</Heading>
          </Center>
        </Box>
        <Box>
          <Center>
            <Flex borderRadius="8" mb="2" w="sm" justify="center" align="center">
              <CreateTimer defaultTime={defaultWorkTime} moveTo={moveTo} setLastTimer={setLastTimer}></CreateTimer>
              <CreateBreak moveTo={moveTo} setLastTimer={setLastTimer} ></CreateBreak>
            </Flex>
          </Center>
          <Center>
            <Flex w="sm" justify="center" align="center">
              <Button colorScheme="yellow" h="20" w="24" margin=".5rem" onClick={() => moveTo("inventory")}><Box h="12" w="12" bgImg="/basket.svg" alt="Basket - Inventory"></Box></Button>
              <Button colorScheme="yellow" h="20" w="24" margin=".5rem" isDisabled onClick={() => moveTo("recipies")}><Box h="12" w="12" bgImg="/blueBook.svg" alt="Blue Book - Recipies" ></Box></Button>
              <Button colorScheme="yellow" h="20" w="24" margin=".5rem" isDisabled onClick={() => moveTo("store")}><Box h="12" w="12" bgImg="/shoppingCart.svg" alt="Shopping Cart - Store" ></Box></Button>
            </Flex>
          </Center>
          <Center>
            <Flex w="sm" justify="center" align="center">
              <Button colorScheme="yellow" h="20" w="24" margin=".5rem" isDisabled onClick={() => moveTo("statistics")}><Box h="12" w="12" bgImg="/trendLineChart.svg" alt="Chart - Statistics"  ></Box></Button>
              <Button colorScheme="yellow" h="20" w="24" margin=".5rem" onClick={() => moveTo("information")}><Box h="12" w="12" bgImg="/information.svg" alt="Infromation Icon - Information" ></Box></Button>
              <Button colorScheme="yellow" h="20" w="24" margin=".5rem" onClick={() => moveTo("settings")}><Box h="12" w="12" bgImg="/gear.svg" alt="Gear - Settings" ></Box></Button>
            </Flex>
          </Center>
          <Center flexDir="column">
            <Text color="darkred" align="center">Note: This app is still in early development; data loss or corruption may occur.</Text>
            <Text color="grey" align="center">Version: 0.2.2; 2022-02-20</Text>
          </Center>
        </Box>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay></ModalOverlay>
          <ModalContent>
            <ModalHeader>Welcome to <Heading bgGradient="linear(to-b, orange.400, red.400)" bgClip="text" size="lg" p="1">Tomato RPG</Heading></ModalHeader>
            <ModalCloseButton></ModalCloseButton>
            <ModalBody>
              <Text>Start a timer, earn vegetables, sell them for more vegetables. Also track your stats.</Text>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="yellow" mr="3" onClick={onClose}>Got it!</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }

const CreateTimer = ({defaultTime = 3, moveTo, setLastTimer}) => {
    const [time, setTime] = useState(defaultTime);
    const [vegetable, setVegetable] = useState("tomato");
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    const getVegImg = (veg) => {
      if (veg == "tomato") {
        return "/tomato.svg";
      }
  
      return "/timerClock.svg"
    }
  
    const moveTime = (movement) => {
      if (time + movement <= 90 && time + movement >= 5) {
        setTime(time+movement);
      }
    }
    return (
      <>
        <Button borderRadius="50%" colorScheme="blue" h="48" w="48" margin="1" onClick={onOpen}><Box h="24" w="24" bgImage="/timerClock.svg" alt="Timer Clock"></Box></Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay></ModalOverlay>
          <ModalContent>
            <ModalHeader>Start New Timer</ModalHeader>
            <ModalCloseButton></ModalCloseButton>
            <ModalBody>
              <Center><Flex align="center" justify="center"><Button>◄</Button><Box p="2" h="16" w="16"><Image src={getVegImg(vegetable)} alt="tomato"></Image></Box><Button>►</Button></Flex></Center>
              <Center><Text size="xl">{vegetable[0].toUpperCase() + vegetable.slice(1)}</Text></Center>
              <Center><Flex align="center" justify="center"><Button isDisabled={time < 10} onClick={() => moveTime(-5)}>◄</Button><Heading p="2">{time >= 10 ? time + ":00" : "0" + time + ":00"}</Heading><Button onClick={() => moveTime(5)} isDisabled={time > 85}>►</Button></Flex></Center>
              
              <Center><Button colorScheme="blue" m="4" onClick={() => {setLastTimer({type:"work", time:time, vegetable:vegetable ,image:getVegImg(vegetable)}); moveTo("timer")}}><Heading size="lg" p="4">Start</Heading></Button></Center>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="red" mr="3" onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }
  
  const CreateBreak = ({moveTo, setLastTimer}) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <>
        <Button borderRadius="50%" colorScheme="teal" h="32" w="32" margin="1" onClick={onOpen}><Box h="16" w="16" bgImage="/hotBeverage.svg" alt="Hot Beverage" ></Box></Button>
        <Modal isOpen={isOpen} onClose={onClose}>
          <ModalOverlay></ModalOverlay>
          <ModalContent>
            <ModalHeader>Start Break</ModalHeader>
            <ModalCloseButton></ModalCloseButton>
            <ModalBody>
              <Button colorScheme="teal" m="3" mr="3.5" p="8" onClick={() => {setLastTimer({type:"break", time:5, image:"/hotBeverage.svg", vegetable:"coffee"}); moveTo("timer")}}><Heading size="lg"> 5 mins</Heading></Button>
              <Button colorScheme="teal" m="3" p="8" onClick={() => {setLastTimer({type:"break", time:10, image:"/hotBeverage.svg", vegetable:"coffee"}); moveTo("timer")}}><Heading size="lg">10 mins</Heading></Button>
              <Button colorScheme="teal" m="3" p="8" onClick={() => {setLastTimer({type:"break", time:15, image:"/hotBeverage.svg", vegetable:"coffee"}); moveTo("timer")}}><Heading size="lg">15 mins</Heading></Button>
              <Button colorScheme="teal" m="3" p="8" onClick={() => {setLastTimer({type:"break", time:20, image:"/hotBeverage.svg", vegetable:"coffee"}); moveTo("timer")}}><Heading size="lg">20 mins</Heading></Button>
            </ModalBody>
  
            <ModalFooter>
              <Button colorScheme="red" mr="3" onClick={onClose}>Close</Button>
            </ModalFooter>
          </ModalContent>
        </Modal>
      </>
    )
  }


export default MainMenu;