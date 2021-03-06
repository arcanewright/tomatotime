import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';


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
  
  const timeString = (time = 0, hrs = false) => {
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

  const Recipie = ({}) => {
  
    return (<>
    
    </>)
  }

  export default Recipies;