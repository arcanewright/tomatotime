import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade } from '@chakra-ui/react'
import { useEffect, useState } from 'react';

const Home = () => {
  const [location, setLocation] = useState("menu");
  const [lastTimer, setLastTimer] = useState({type:"work", time:3, image:"/timerClock.svg"})
  const [transition, setTransition] = useState(false);
  const [displayTopBar, setDisplayTopBar] = useState(true);
  const [locTimeout, setLocTimeout] = useState(0);
  const [settings, setSettings] = useState({alarmSound:true, darkMode:false, defaultTime:3, continueCountdownWhileClosed:false, dontStoreGameData:false})
  const [firstVisit, setFirstVisit] = useState(false);
  const [energy, setEnergy] = useState(3);
  const [money, setMoney] = useState(50);

  //traverse the menus
  const locationHandler = (location) => {
    setTransition(true);
    let topBarBool = true;
    if (location == "timer") {
      topBarBool = false;
      if (displayTopBar) {
        setDisplayTopBar(false);
      }
    }
    else {
      topBarBool = true;
    }
  

    setLocation(location);
    setLocTimeout(setTimeout(() => {setTransition(false); setDisplayTopBar(topBarBool);}, 100));
  }

  //initialize on startup

  useEffect(() => {
    //check if it's the first recorded visit
    if (!localStorage.getItem("lastInteraction")) {
      setFirstVisit(true);
      localStorage.setItem("lastInteraction", new Date());
      localStorage.setItem("settings", JSON.stringify(settings));
      localStorage.setItem("inventory", JSON.stringify({}));
      localStorage.setItem("store", JSON.stringify({}));
      localStorage.setItem("money", money);
      localStorage.setItem("energy", energy);
    }
    //check if it's been more than 2 hours since last interaction
    else if (new Date() - Date(localStorage.getItem("lastInteraction")) > 7200000) {

    }
    // if it's been less than 2 hours (option to resume timer if interrupted)
    else {

    }
  },[])

  //ongoing checks

  useEffect(() => {

    if (locTimeout && !transition) {
      clearTimeout(locTimeout);
    }
  })

  const resolveTimer = (type, result, vegetable = {}) => {
    if (type=="break" && result == "success") {
      setEnergy(3);
    }
    else if (type="work" && result == "success") {
      setEnergy(state => state - 1);

    }
  }

  return (
    <Box userSelect="none" minH="100vh" bgColor="whitesmoke">
      <Fade unmountOnExit in={displayTopBar}>
        <TopBar money={money} energy={energy} moveTo={locationHandler} dispReturnToMenu={location != "menu"}></TopBar>
      </Fade>
      <Fade unmountOnExit in={location == "menu" && !transition}>  
        <MainMenu firstVisit={firstVisit} energy={energy} money={money} moveTo={locationHandler} setLastTimer={setLastTimer}></MainMenu>
      </Fade>
      <Fade unmountOnExit in={location == "timer" && !transition}>
        <Timer lastTimer={lastTimer} moveTo={locationHandler} resolve={resolveTimer} settings={settings}></Timer>
      </Fade>
      <Fade unmountOnExit in={location == "inventory" && !transition}>
        <Inventory></Inventory>
      </Fade>
      <Fade unmountOnExit in={location == "recipies" && !transition}>
        <Box>Recipies</Box>
      </Fade>
      <Fade unmountOnExit in={location == "store" && !transition}>
        <Box>Store</Box>
      </Fade>
      <Fade unmountOnExit in={location == "statistics" && !transition}>
        <Box>Statistics</Box>
      </Fade>
      <Fade unmountOnExit in={location == "information" && !transition}>
        <Box>About</Box>
      </Fade>
      <Fade unmountOnExit in={location == "settings" && !transition}>
        <Box>Settings</Box>
      </Fade>
    </Box>
    
  )
}

const Inventory = ({money, energy}) => {

  return <>
    <Head>
      <title>Tomato RPG - Inventory</title>
      <meta name="description" content="Simple Pomodoro RPG"/>
      <link rel="icon" href="basket.svg"/>
    </Head>
    <Flex>
      Inventory
    </Flex>
  </>
}

const Timer = ({lastTimer, moveTo, settings, resolve}) => {


  const [timeLeft, setTimeLeft] = useState(lastTimer.time * 60);
  const [initialTime, setInitialTime] = useState(lastTimer.time * 60);
  const [paused, setPaused] = useState(false);
  const [intervalStamp, setIntervalStamp] = useState(0);
  const [timerEnd, setTimerEnd] = useState(false);
  const [timerEndAck, setTimerEndAck] = useState(false);
  const [colorScheme, setColorScheme] = useState(lastTimer.type =="break" ? "teal" : lastTimer.type=="work" ? "orange" : "grey")
  const [audioPlaying, setAudioPlaying] = useState(false);

  const alarm = new Audio("mixkit-old-telephone-ring-1357.wav");

  useEffect(() => {
    if (!paused && !timerEnd) {
      if (!intervalStamp) {
        const interval = setInterval(() => {setTimeLeft(state => {localStorage.setItem("timeLeft", state - 1); return state - 1})}, 1000);
        setIntervalStamp(interval);
      }
    }

    if ((paused || timerEnd) && intervalStamp ) {
      clearInterval(intervalStamp);
      setIntervalStamp(0);
    }

    if (timeLeft <= 0) {
      setTimerEnd(true);
    }

    if (timerEnd && !timerEndAck && !audioPlaying && settings.alarmSound) {
      setAudioPlaying(true);
      alarm.play();
    }

    if (timerEndAck && audioPlaying) {
      setAudioPlaying(false);
      alarm.pause();
    }

  }, [paused, timerEnd, intervalStamp, timeLeft, audioPlaying, alarm, timerEndAck, settings])

  return (
    <>
      <Head>
        <title>Tomato RPG{timerEnd ? timerEndAck ? "" : " - TIME UP" : " - " + timeString(timeLeft)}</title>
        <meta name="description" content="Simple Pomodoro RPG" />
        <link rel="icon" href={lastTimer.type == "break" ? "/hotBeverage.svg" : "/timerClock.svg"} />
      </Head>
      <Flex direction="column" justify="center" align="center">
        <Flex minH="10vh" align="center" justify="center"><Box h="16" w="16" bgImg={lastTimer.image} alt={lastTimer.vegetable}></Box><Box w="8" h="8" ></Box><Heading color={lastTimer.type == "work" ? "orange.600" : lastTimer.type == "break" ? "teal.600" : "gray.600"}>{lastTimer.type == "work" ? "Work" : lastTimer.type == "break" ? "Break" : ""}</Heading></Flex>
        <CircularProgress size="240" color={colorScheme} value={(initialTime - timeLeft)*100 / initialTime}>
          <CircularProgressLabel>
            <Box bgGradient="radial(orange.400, orange.300, whitesmoke" p="8" borderRadius="50%">
              <Flex direction="column" justify="center" align="center">
                <Text fontFamily="monospace">{timeString(timeLeft)}</Text>
              </Flex>
            </Box>
          </CircularProgressLabel>
        </CircularProgress>
        <Spacer minH="5vh"><Center>{paused ? "Paused" : ""}</Center></Spacer>
        <Button colorScheme="yellow" h="24" aria-label='Pause' onClick={() => setPaused(!paused)}><Box bgImg={paused ? "/play.svg" : "pause.svg"} color="grey" h="16" w="16" filter="opacity(80%)"></Box></Button>
        <Spacer minH="5vh"></Spacer>
        <StopModal moveTo={moveTo} resolve={resolve} timerProps={lastTimer}></StopModal>
        <EndModal finished={timerEnd && !timerEndAck} timerProps={lastTimer} resolve={resolve} acknowledge={() => setTimerEndAck(true)}></EndModal>
      </Flex>
    </>
  )
}

const StopModal = ({moveTo, resolve, timerProps}) => {
  const { isOpen, onOpen, onClose} = useDisclosure();

  return (<>
    <Button colorScheme="red" h="16" aria-label='Stop' onClick={onOpen}><Box bgImg="/stop.svg" h="12" w="12" filter="opacity(80%)" ></Box></Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <ModalHeader>Cancel Timer?</ModalHeader>
        <ModalCloseButton></ModalCloseButton>

        <ModalFooter>
          <Center>
            <Button colorScheme="red" mr="3" onClick={() => {resolve(timerProps.type, "failure"); moveTo("menu"); onClose()}}><Heading size="sm">Cancel Timer</Heading></Button>
            <Button colorScheme="yellow" onClick={onClose}><Heading size="sm">Return to Timer</Heading></Button>

          </Center>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>)
}

const EndModal = ({finished, acknowledge, resolve, timerProps}) => {
  const {isOpen, onOpen, onClose} = useDisclosure();

  useEffect(() => {
    if (finished && !isOpen) {
      onOpen();
    }
  })

  return (
  <>
    <Modal isOpen={isOpen} onClose={onClose} onClick={acknowledge}>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <ModalHeader>Time Over!</ModalHeader>
        <ModalCloseButton onClick={() => {resolve(timerProps.type, "success");acknowledge(); onClose()}}></ModalCloseButton>
        <ModalBody>

        </ModalBody>
        <ModalFooter>
          <Button onClick={() => {resolve(timerProps.type, "failure"); acknowledge(); onClose()}}>Return to Menu</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
    </>)
}

const timeString = (time) => {
  const minutes = parseInt(time / 60);
  const seconds = parseInt(time % 60);
  const minutes0 = minutes >= 10 ? "" : "0";
  const seconds0 = seconds >= 10 ? "" : "0"; 
  return(minutes0 + minutes + ":" + seconds0 + seconds);
}

const TopBar = ({energy, money, dispReturnToMenu, moveTo}) => {

  return (<Box bgGradient="linear(to-r, orange.600, red.600)" minW="100vw" >
    <Center flexDir="column">
      <Flex color="whitesmoke" padding="1rem" w="sm" align="center">
        <Flex align="center">
          <Box h="8" w="8" bgImg="/coin.svg" alt="Coin - Money"></Box>
          <Heading padding=".5rem" size="lg" fontWeight="light">{money}</Heading>
        </Flex>
        <Spacer align="right"></Spacer>
        {createEnergy(energy)}
        <Button colorScheme='red' p="1" m="2" mr="0" onClick={() => moveTo("menu")} isDisabled={!dispReturnToMenu}><Box h="6" w="6" bgImg="/houseButton.svg" alt="Main Menu"></Box></Button>
      </Flex>
    </Center>
  </Box>)
}

const MainMenu = ({moveTo, setLastTimer, energy, money, firstVisit}) => {

  const [defaultWorkTime, setDefaultBreakTime] = useState(.25);

  const { isOpen, onOpen, onClose} = useDisclosure();
  const [tutorialOpened, setTutorialOpened] = useState(false);
  const [tutorialDone, setTutorialDone] = useState(false);

  useEffect(() => {

    if (firstVisit && !tutorialOpened && !tutorialDone) {
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
          <Heading size="md" p="2">Welcome back!</Heading>
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
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem" onClick={() => moveTo("recipies")}><Box h="12" w="12" bgImg="/blueBook.svg" alt="Blue Book - Recipies" ></Box></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem" onClick={() => moveTo("store")}><Box h="12" w="12" bgImg="/shoppingCart.svg" alt="Shopping Cart - Store" ></Box></Button>
          </Flex>
        </Center>
        <Center>
          <Flex w="sm" justify="center" align="center">
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem" onClick={() => moveTo("statistics")}><Box h="12" w="12" bgImg="/trendLineChart.svg" alt="Chart - Statistics"  ></Box></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem" onClick={() => moveTo("information")}><Box h="12" w="12" bgImg="/information.svg" alt="Infromation Icon - Information" ></Box></Button>
            <Button colorScheme="yellow" h="20" w="24" margin=".5rem" onClick={() => moveTo("settings")}><Box h="12" w="12" bgImg="/gear.svg" alt="Gear - Settings" ></Box></Button>
          </Flex>
        </Center>
        <Center flexDir="column">
          <Text color="darkred" align="center">Note: This app is still in early development; dataloss or corruption may occur.</Text>
          <Text color="grey" align="center">Version: 0.2.1</Text>
        </Center>
      </Box>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Welcome to <Heading bgGradient="linear(to-b, orange.400, red.400)" bgClip="text" size="md" p="2">Tomato RPG</Heading></ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="yellow" mr="3" onClick={onClose}>Got it!</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

const createEnergy = (num, max = 3) => {

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
      <Button borderRadius="50%" colorScheme="blue" h="48" w="48" margin=".5rem" onClick={onOpen}><Box h="24" w="24" bgImage="/timerClock.svg" alt="Timer Clock"></Box></Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Start New Timer</ModalHeader>
          <ModalCloseButton></ModalCloseButton>
          <ModalBody>
            <Center><Flex align="center" justify="center"><Button>◄</Button><Box p="2" h="16" w="16"><Image src={getVegImg(vegetable)} alt="tomato"></Image></Box><Button>►</Button></Flex></Center>
            <Center><Text size="xl">{vegetable[0].toUpperCase() + vegetable.slice(1)}</Text></Center>
            <Center><Flex align="center" justify="center"><Button isDisabled={time < 10} onClick={() => moveTime(-5)}>◄</Button><Heading p="2">{time >= 10 ? time + ":00" : "0" + time + ":00"}</Heading><Button onClick={() => moveTime(5)} isDisabled={time > 85}>►</Button></Flex></Center>
            
            <Center><Button colorScheme="green" m="4" onClick={() => {setLastTimer({type:"work", time:time, vegetable:vegetable ,image:getVegImg(vegetable)}); moveTo("timer")}}><Heading size="lg" p="4">Start</Heading></Button></Center>
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
      <Button borderRadius="50%" colorScheme="teal" h="32" w="32" margin=".5rem" onClick={onOpen}><Box h="16" w="16" bgImage="/hotBeverage.svg" alt="Hot Beverage" ></Box></Button>
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

export default Home;