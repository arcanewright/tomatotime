import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText, scaleFadeConfig, ScaleFade } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';

import { InvBox } from './_inventory';
import vegetables from "./vegetabledex.json"

const Timer = ({lastTimer = {time:25, type:"work"}, moveTo, resolve, vegRoot}) => {


    const [timeLeft, setTimeLeft] = useState(lastTimer.time * 60);
    const [initialTime, setInitialTime] = useState(lastTimer.time * 60);
    const [paused, setPaused] = useState(false);
    const [intervalStamp, setIntervalStamp] = useState(0);
    const [timerEnd, setTimerEnd] = useState(false);
    const [colorScheme, setColorScheme] = useState(lastTimer.type =="break" ? "teal" : lastTimer.type=="work" ? "orange" : "grey")
    const [audioPlaying, setAudioPlaying] = useState(false);
    
    const determinePrize = () => {
      let rarity = "";
      const random = Math.random() * 1000;
      if (random > 998) {
        rarity = "legendary"
      }
      else if (random > 948) {
        rarity = "rare"
      }
      else {
        rarity = "common";
      }

      return vegRoot + ":" + rarity;
    }

    const prize = determinePrize();
  
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
  
    }, [paused, timerEnd, intervalStamp, timeLeft])
  
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
          <EndModal finished={timerEnd} timerProps={lastTimer} resolve={resolve} prizeVegetable={prize}></EndModal>
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
  
  
  const EndModal = ({finished, resolve, timerProps, prizeVegetable}) => {
    const [alarm, setAlarm] = useState(null);
    const [playAlarm, setPlayAlarm] = useState(false);
    const [loopAlarm, setLoopAlarm] = useState(false);
    const [audioPlaying, setAudioPlaying] = useState(false);
    const [audioPlayed, setAudioPlayed] = useState(false);
    const [ack, setAck] = useState(false);
    const {isOpen, onOpen, onClose} = useDisclosure();
    const [showPrize, setShowPrize] = useState(false);
    const [transition, setTransition] = useState(false);
    const [transTimeout, setTransTimeout] = useState(0);

    useEffect(()=> {
      setAlarm(new Audio("beep-7-with-silence-x5.wav"));
      setPlayAlarm(localStorage.getItem("s-play-alarm") ? localStorage.getItem("s-play-alarm") == "true" : true);
      setLoopAlarm(localStorage.getItem("s-loop-alarm") ? localStorage.getItem("s-loop-alarm") == "true" : false);
    }, [])


    useEffect(() => {
      if (finished && !isOpen) {
        onOpen();
      }
      if (finished && !audioPlaying && playAlarm && !loopAlarm && !audioPlayed) {
        setAudioPlaying(true);
        alarm.play();
      }
      
      if (finished && !audioPlaying && playAlarm && loopAlarm && !audioPlayed) {
        setAudioPlaying(true);
        alarm.loop = true;
        alarm.play();
      }
  
      if (ack && audioPlaying) {
        setAudioPlaying(false);
        setAudioPlayed(true);
        alarm.pause();
      }
      if (transition && !transTimeout) {
        const timeout = setTimeout(() => setTransition(false), 100);
        setTransTimeout(timeout);
      }
      if (!transition && transTimeout) {
        clearTimeout(transTimeout);
      }
    })


    const prize = vegetables.find((e) => e.vegetable == prizeVegetable) || {vegetable:"error", label:"Error", image:"/tomato.svg", rarityLabel:"Common", filterExpression:"", worth:0};

    const givePrize = (veg) => {
      const inv = localStorage.getItem("inventory");
      let inventory = [];
      let result = [];
      if (inv && inv != "undefined") {
        inventory = JSON.parse(inv);
      }

      const index = inventory.findIndex((e)=> e.vegetable == veg);
      
      if (index == -1) {
        result.concat(inventory);
        result.push({...prize, quantity:1});
      }
      else {
        result = inventory.map((e, i) => {if (i == index) {let temp = e; temp.quantity++; return temp;} else { return e}})
      }
      localStorage.setItem("inventory", JSON.stringify(result));
    }
  
    return (
    <>
      <Modal isOpen={isOpen} onClose={onClose} onClick={() => setAck(true)}>
        <ModalOverlay></ModalOverlay>
        <ModalContent>
          <ModalHeader>Time Over!</ModalHeader>
          <ModalCloseButton onClick={() => {setAck(true); resolve(timerProps.type, "success"); onClose()}}></ModalCloseButton>
          <ModalBody>
            <ScaleFade unmountOnExit initialScale=".9" in={!showPrize && !transition}>
              <Center>
                <Text>Want to count this timer?</Text>
              </Center>
              <Center>
                <Button p="8" m="2" colorScheme="blue" onClick={() => {setAck(true); setShowPrize(true); givePrize(prizeVegetable);setTransition(true)}}><Text fontSize="2xl">Yes!</Text></Button>
              </Center>
              <Center>
                <Button p="2" m="4" colorScheme="red" onClick={() => {setAck(true); resolve(timerProps.type, "failure"); onClose()}}>No</Button>
              </Center>
            </ScaleFade>
            <ScaleFade unmountOnExit initialScale=".9" in={showPrize && !transition}>
              <Flex direction="column">
                <Center>
                  <Text>You&apos;ve earned:</Text>
                </Center>
                <Center>
                  <InvBox forsale={false} vegetable={prize.vegetable} label={prize.label} image={prize.image} rarityLabel={prize.rarityLabel} filterExp={prize.filterExpression} worth={prize.worth} quantity={1}></InvBox>
                </Center>
                <Center>
                  <Button p="8" m="2" colorScheme="yellow" onClick={() => {resolve(timerProps.type, "success"); onClose()}}>Return to Menu</Button>
                </Center>
              </Flex>
              
            </ScaleFade>
            
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

  export default Timer;