import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';

const Home = () => {
  const [location, setLocation] = useState("menu");
  const [lastTimer, setLastTimer] = useState({type:"work", time:25, image:"/timerClock.svg"})
  const [transition, setTransition] = useState(false);
  const [displayTopBar, setDisplayTopBar] = useState(true);
  const [locTimeout, setLocTimeout] = useState(0);
  const [settings, setSettings] = useState({playAlarm:true, loopAlarm:false, darkMode:false, defaultTime:25, continueCountdownWhileClosed:false, storeGameData:true, storeStatistics:true})
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
    setLocTimeout(setTimeout(() => {setTransition(false); setDisplayTopBar(topBarBool);}, 200));
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
    if (type == "break" && result == "success") {
      setEnergy(3);
      locationHandler("menu")
    }
    else if (type == "work" && result == "success") {
      locationHandler("menu")
    }
    else if (result == "failure") {
      locationHandler("menu")
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
        <Inventory setMoney={setMoney}></Inventory>
      </Fade>
      <Fade unmountOnExit in={location == "recipies" && !transition}>
        <Recipies></Recipies>
      </Fade>
      <Fade unmountOnExit in={location == "store" && !transition}>
        <Store></Store>
      </Fade>
      <Fade unmountOnExit in={location == "statistics" && !transition}>
        <Statistics></Statistics>
      </Fade>
      <Fade unmountOnExit in={location == "information" && !transition}>
        <Information></Information>
      </Fade>
      <Fade unmountOnExit in={location == "settings" && !transition}>
        <Settings settings={settings} setSettings={setSettings}></Settings>
      </Fade>
    </Box>
    
  )
}

const Settings = ({settings, setSettings}) => {

  const [darkMode, setDarkMode] = useState(settings.darkMode);
  const [playAlarm, setPlayAlarm] = useState(settings.playAlarm);
  const [loopAlarm, setLoopAlarm] = useState(settings.loopAlarm);
  const [defaultTime, setDefaultTime] = useState(settings.defaultTime);
  const [continueOffline, setContinueOffline] = useState(true);
  const [storeGameData, setStoreGameData] = useState(true);
  const [storeStatistics, setStoreStatistics] = useState(true);

  const eraseGameData = () => {

  }
  const eraseStatistics = () => {

  }

  const saveSettings = () => {
    const newSettings = {darkMode:darkMode, playAlarm:playAlarm, loopAlarm:loopAlarm, defaultTime:defaultTime, continueOffline:continueOffline, storeGameData:storeGameData, storeStatistics:storeGameData}
    setSettings(newSettings);
  }

  return (<>
  <Head>
    <title>Tomato RPG - Settings</title>
    <meta name="description" content="Simple Pomodoro RPG"/>
    <link rel="icon" href="/gear.svg"/>
  </Head>
  <Flex direction="column">
    <Center><Heading p="2" bgGradient="linear(to-r, orange.500, yellow.500)" bgClip="text">Settings</Heading></Center>
    <Center>
      <Flex direction="column" align="left" justify="center">
        <FormControl display="flex" alignItems="left" p="2" maxW="calc(100vw-16)" flexDirection="column">
          <Heading size="md" p="2">Defaults</Heading>
          <Flex justify="space-between" m="2">
            <FormLabel htmlFor="dark-mode" mb="0">
              Dark Mode
            </FormLabel>
            <Switch id="dark-mode" isChecked={darkMode} onChange={() => setDarkMode(state => !state)}></Switch>
          </Flex> 
          <Flex justify="space-between" m="2">
            <FormLabel htmlFor="alarm" mb="0">
              Play Alarm
            </FormLabel>
            <Switch id="alarm" isChecked={playAlarm} onChange={() => setPlayAlarm(state => !state)}></Switch>
          </Flex>
          <Flex justify="space-between" m="2">
            <FormLabel htmlFor="alarm-loop" mb="0">
              Loop Alarm
            </FormLabel>
            <Switch id="alarm-loop" isChecked={loopAlarm} isDisabled={!playAlarm} onChange={() => setLoopAlarm(state => !state)}></Switch>
          </Flex>
          <Flex justify="space-between" align="center" m="2">
            <FormLabel htmlFor="default-time" mb="0">Default Work Timer (mins)</FormLabel>
            <NumberInput step={5} value={defaultTime} onChange={(val) => setDefaultTime(parseInt(val))} min={5} max={90} size="md" maxW="20">
              <NumberInputField></NumberInputField>
              <NumberInputStepper>
                <NumberIncrementStepper></NumberIncrementStepper>
                <NumberDecrementStepper></NumberDecrementStepper>
              </NumberInputStepper>
            </NumberInput>
          </Flex>
          <Flex justify="space-between" m="2" align="center">
            <FormLabel htmlFor="continue-countdown" mb="0">Continue Timer While Offline</FormLabel>
            <Switch id="continue-countdown" isChecked={continueOffline} onChange={()=> setContinueOffline(state => !state)}></Switch>
          </Flex>
          <Heading size="md" p="2">Data</Heading>
          
          <Flex justify="space-between" m="2" align="center">
            <FormLabel htmlFor="game-data" mb="0">Store Game Data</FormLabel>
            <Switch id="game-data" isChecked={storeGameData} onChange={() => setStoreGameData(state => !state)}></Switch>
          </Flex>
          <FormHelperText m="2">Warning: Disabling Game Storage disables the Ingredient, Money, Energy, Inventory, Recipie, and Store systems.</FormHelperText>
          <Flex justify="space-between" m="2" align="center">
            <FormLabel htmlFor="game-data" mb="0">Delete Existing Game Data</FormLabel>
            <EraseGameData erase={eraseGameData}></EraseGameData>
          </Flex>
          <Flex justify="space-between" m="2" align="center">
            <FormLabel htmlFor="statistics" mb="0">Store Statistics</FormLabel>
            <Switch id="statistics" isChecked={storeStatistics} onChange={() => setStoreStatistics(state => !state)}></Switch>
          </Flex>
          <FormHelperText m="2">Warning: Disabling Statistics Storage disables the Statistics system.</FormHelperText>
          <Flex justify="space-between" m="2" align="center">
            <FormLabel htmlFor="game-data" mb="0">Delete Existing Statistics Data</FormLabel>
            <EraseStatistics erase={eraseStatistics}></EraseStatistics>
          </Flex>
          <Flex justify="center" align="center" m="2">
            <Button colorScheme="blue" onClick={saveSettings}>Save Settings</Button>
          </Flex>
        </FormControl>
        
      </Flex>
    </Center>
  </Flex></>)
}

const EraseGameData = ({erase}) => {
  const { isOpen, onOpen, onClose} = useDisclosure();


  return <>
    <Button onClick={onOpen} colorScheme="blue" >Delete</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <ModalHeader>Are you sure?</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody>
          There is no way to recover Game Data once deleted. 
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr="3" onClick={() => {erase(); onClose();}}>Delete</Button>
          <Button colorScheme="yellow" onClick={onClose}>Return to Settings</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>

}

const EraseStatistics = ({erase}) => {
  const { isOpen, onOpen, onClose} = useDisclosure();


  return <>
    <Button colorScheme="blue" onClick={onOpen}>Delete</Button>
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <ModalHeader>Are you sure?</ModalHeader>
        <ModalCloseButton></ModalCloseButton>
        <ModalBody>
          There is no way to recover Statistics Data once deleted. 
        </ModalBody>
        <ModalFooter>
          <Button colorScheme="red" mr="3" onClick={() => {erase(); onClose();}}>Delete</Button>
          <Button colorScheme="yellow" onClick={onClose}>Return to Settings</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>

}

const Information = ({}) => {


  return (<>
  <Head>
    <title>Tomato RPG - Information</title>
    <meta name="description" content="Simple Pomodoro RPG"/>
    <link rel="icon" href="/information.svg"/>
  </Head>
  <Flex direction="column">
    <Center><Heading p="2" bgGradient="linear(to-r, orange.500, yellow.500)" bgClip="text">Information</Heading></Center>
    <Center>
      <Flex direction="column" align="left" justify="center">
      </Flex>
    </Center>
  </Flex></>)
}

const Statistics = ({}) => {


  return (<>
  <Head>
    <title>Tomato RPG - Statistics</title>
    <meta name="description" content="Simple Pomodoro RPG"/>
    <link rel="icon" href="/trendLineChart.svg"/>
  </Head>
  <Flex direction="column">
    <Center><Heading p="2" bgGradient="linear(to-r, orange.500, yellow.500)" bgClip="text">Statistics</Heading></Center>
    <Center>
      <Flex direction="column" minW="320px" maxW="800px" borderRadius="8" bgGradient="linear(to-b, orange.200, yellow.200)" wrap="wrap" align="center" justify="center">

      </Flex>
    </Center>
  </Flex>
  </>)
}

const Store = ({}) => {


  return (<>
  <Head>
    <title>Tomato RPG - Store</title>
    <meta name="description" content="Simple Pomodoro RPG"/>
    <link rel="icon" href="/shoppingCart.svg"/>
  </Head>
  <Flex direction="column">
    <Center><Heading p="2" bgGradient="linear(to-r, orange.500, yellow.500)" bgClip="text">Store</Heading></Center>
    <Center>
      <Flex direction="column" minW="320px" maxW="800px" borderRadius="8" bgGradient="linear(to-b, orange.200, yellow.200)" wrap="wrap" align="center" justify="center">

      </Flex>
    </Center>
  </Flex>
  
  </>)
}

const Recipies = ({}) => {
  const [timeLeft, setTimeLeft] = useState(1);
  const [runOnce, setRunOnce] = useState(true);
  const [intervalStamp, setIntervalStamp] = useState(0);
  const [todayDate, setTodayDate] = useState();

  useEffect(() => {

    if (runOnce) {
      setRunOnce(false);
      let currentDate = "" + Date();
    }

    if (timeLeft == 0) {
      setTodayDate(new Date())
      setTimeLeft(86400)
    }
    
    if (!intervalStamp) {
      const stamp = setInterval(() => setTimeLeft(state => state - 1), 1000);
      setIntervalStamp(stamp);
    }


  })
  

  const createRecipies = () => {
    let list = [];
    return (<></>)
  }

  return <>
  <Head>
    <title>Tomato RPG - Recipies</title>
    <meta name="description" content="Simple Pomodoro RPG"/>
    <link rel="icon" href="/blueBook.svg"/>
  </Head>
  <Flex direction="column">
    <Center><Heading p="2" bgGradient="linear(to-r, orange.500, yellow.500)" bgClip="text">Recipies</Heading></Center>
    <Center>
      <Flex direction="column" minW="320px" maxW="800px" borderRadius="8" bgGradient="linear(to-b, orange.200, yellow.200)" wrap="wrap" align="center" justify="center">
        <Center><Text>New Specials - Every Day at 3pm</Text></Center>
        <Center><Heading>{timeString(timeLeft, true)}</Heading></Center>
        {createRecipies()}
      </Flex>
    </Center>
  </Flex>
</>
}

const Recipie = ({}) => {

  return (<>
  
  </>)
}

const vegetables = [{vegetable:"tomato:common", label:"Tomato", rarityLabel:"Common", filterExpression:"", worth:10}, {vegetable:"tomato:rare", label:"Tomato", rarityLabel:"Rare", filterExpression:"hue-rotate(90deg)", worth:20}, {vegetable:"tomato:rare", label:"Tomato", rarityLabel:"Rare", filterExpression:"hue-rotate(180deg)", worth:50}]

const Inventory = ({money, setMoney}) => {

  const [inventory, setInventory] = useState([{vegetable:"tomato:common", label:"Tomato", rarityLabel:"Common", filterExpression:"", worth:10, quantity:3}]);

  const sellHandler = (idx, veg) => {
    setInventory((state) => {
      let newInv = [];
      state.map((e, i) => {
        if (i != idx) {
          newInv.push(e);
        }
        else {
          if (state[i].quantity == 1) {
            setMoney(moneystate => moneystate + state[i].worth);
          }
          else {
            setMoney(moneystate => moneystate + state[i].worth);
            newInv.push({...state[i], quantity: state[i].quantity - 1});
          }
        }
      }
      )
      return newInv;
    }
    )
  }

  const createInventory = (inv = []) => {
    let result = [];
    for (let i = 0; i < inv.length; i++) {
      result.push(<InvBox key={i} index={i} sell={sellHandler} vegetable={inv[i].vegetable} label={inv[i].label} rarityLabel={inv[i].rarityLabel} filterExp={inv[i].filterExpression} worth={inv[i].worth} quantity={inv[i].quantity}></InvBox>)
    }
    if (result.length < 1) {
      result.push(<Text>Empty</Text>)
    }
    return (result)
  }

  return <>
    <Head>
      <title>Tomato RPG - Inventory</title>
      <meta name="description" content="Simple Pomodoro RPG"/>
      <link rel="icon" href="/basket.svg"/>
    </Head>
    <Flex direction="column">
      <Center><Heading p="2" bgGradient="linear(to-r, orange.500, yellow.500)" bgClip="text">Inventory</Heading></Center>
      <Center>
        <Flex minW="320px" maxW="800px" borderRadius="8" bgGradient="linear(to-b, orange.200, yellow.200)" wrap="wrap" align="flex-start" alignContent="flex-start" justify="center">
          {createInventory(inventory)}
        </Flex>
      </Center>
    </Flex>
  </>
}

const InvBox = ({selected, vegetable, index, label, rarityLabel, filterExp, worth, quantity, sell}) => {

  const rarityColor = rarityLabel == "Common" ? "orange" : rarityLabel == "Rare" ? "whitesmoke" : rarityLabel == "Legendary" ? "gold" : "black";
  const rarityBg = rarityLabel == "Common" ? "darkred": rarityLabel == "Rare" ? "gray" : rarityLabel == "Legendary" ? "skyblue" : "whitesmoke";


  return (<Flex w="48" p="2"a m="2" bgColor={selected ? 'orange.500' : 'orange.300'} borderRadius="5px" direction="column" justify="center" align="center">
    <Flex w="100%" justify="space-between" align="baseline"><Text fontSize="md">{label}</Text><Text pl="1" pr="1" color={rarityColor} bg={rarityBg} borderRadius="2" fontSize="xs">{rarityLabel}</Text></Flex>
    <Box h="32" w="32" bgImg="/tomato.svg" alt="tomato" filter={filterExp}></Box>
    <Flex w="100%" justify="space-between" align="center"><Text fontSize="lg" pl="1" pr="1" bg="red.500" borderRadius="4">{quantity}</Text><Button h="8" colorScheme="yellow" align="center" pl="1" pr="1" borderRadius="5" onClick={() => sell(index, vegetable)}><Box h="6" w="6" bgImg="/coin.svg" alt="Coin"></Box><Text fontSize="lg">{worth}</Text></Button></Flex>
  </Flex>)
}

const Timer = ({lastTimer, moveTo, settings, resolve}) => {


  const [timeLeft, setTimeLeft] = useState(lastTimer.time * 60);
  const [initialTime, setInitialTime] = useState(lastTimer.time * 60);
  const [paused, setPaused] = useState(false);
  const [intervalStamp, setIntervalStamp] = useState(0);
  const [timerEnd, setTimerEnd] = useState(false);
  const [colorScheme, setColorScheme] = useState(lastTimer.type =="break" ? "teal" : lastTimer.type=="work" ? "orange" : "grey")
  const [audioPlaying, setAudioPlaying] = useState(false);
  


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

  }, [paused, timerEnd, intervalStamp, timeLeft, settings])

  return (
    <>
      <Head>
        <title>Tomato RPG{timerEnd ? " - TIME UP" : " - " + timeString(timeLeft)}</title>
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
        <EndModal finished={timerEnd} settings={settings} timerProps={lastTimer} resolve={resolve}></EndModal>
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


const EndModal = ({finished, resolve, timerProps, settings}) => {
  const [alarm, setAlarm] = useState(new Audio("beep-7-with-silence-x5.wav"));
  const [audioPlaying, setAudioPlaying] = useState(false);
  const [ack, setAck] = useState(false);
  const {isOpen, onOpen, onClose} = useDisclosure();
  useEffect(() => {
    if (finished && !isOpen) {
      onOpen();
    }
    if (finished && !audioPlaying && settings.playAlarm && !settings.loopAlarm) {
      setAudioPlaying(true);
      alarm.play();
    }
    
    if (finished && !audioPlaying && settings.playAlarm && settings.loopAlarm) {
      setAudioPlaying(true);
      alarm.loop = true;
      alarm.play();
    }

    if (ack && audioPlaying) {
      setAudioPlaying(false);
      alarm.pause();
    }
  })

  return (
  <>
    <Modal isOpen={isOpen} onClose={onClose} onClick={() => setAck(true)}>
      <ModalOverlay></ModalOverlay>
      <ModalContent>
        <ModalHeader>Time Over!</ModalHeader>
        <ModalCloseButton onClick={() => {setAck(true); resolve(timerProps.type, "success"); onClose()}}></ModalCloseButton>
        <ModalBody>
          <Center>
            <Text>Want to count this timer?</Text>
          </Center>
          <Center>
            <Button p="8" m="2" colorScheme="blue" onClick={() => {setAck(true); resolve(timerProps.type, "success"); onClose()}}><Text fontSize="2xl">Yes!</Text></Button>
          </Center>
          <Center>
            <Button p="2" m="4" colorScheme="red" onClick={() => {setAck(true); resolve(timerProps.type, "failure"); onClose()}}>No</Button>
          </Center>
        </ModalBody>
      </ModalContent>
    </Modal>
  </>)
}

const timeString = (time, hrs = false) => {
  if (!hrs) {
    const minutes = parseInt(time / 60);
    const seconds = parseInt(time % 60);
    const minutes0 = minutes >= 10 ? "" : "0";
    const seconds0 = seconds >= 10 ? "" : "0"; 
    return(minutes0 + minutes + ":" + seconds0 + seconds);
  }
  else {
    const hours = parseInt(time / 3600);
    const remainingTime = time % 3600;
    const minutes = parseInt( remainingTime / 60);
    const seconds = remainingTime % 60;
    const hours0 = hours >= 10 ? "" : "0";
    const minutes0 = minutes >= 10 ? "" : "0";
    const seconds0 = seconds >= 10 ? "" : "0"; 
    return (hours0 + hours + ":" + minutes0 + minutes + ":"  + seconds0 + seconds);
  }
  
}

const TopBar = ({energy, money, dispReturnToMenu, moveTo}) => {

  return (<>
  <Box h="16" w="100vw" minW="100vw"></Box>
  <Box bgGradient="linear(to-r, orange.600, red.600)" minW="100vw" position="absolute" top="0" left="0">
    <Center flexDir="column">
      <Flex color="whitesmoke" w="xs" align="center">
        <Flex align="center">
          <Box h="8" w="8" bgImg="/coin.svg" alt="Coin - Money"></Box>
          <Heading padding=".5rem" size="lg" fontWeight="light">{money}</Heading>
        </Flex>
        <Spacer align="right"></Spacer>
        {createEnergy(energy)}
        <Button colorScheme='yellow' p="1" m="2" mr="0" onClick={() => moveTo("menu")} isDisabled={!dispReturnToMenu}><Box h="6" w="6" bgImg="/houseButton.svg" alt="Main Menu"></Box></Button>
      </Flex>
    </Center>
  </Box>
  </>)
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
          <Text color="darkred" align="center">Note: This app is still in early development; data loss or corruption may occur.</Text>
          <Text color="grey" align="center">Version: 0.2.2; 2022-02-20</Text>
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