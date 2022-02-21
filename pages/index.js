import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';


import MainMenu from './_mainmenu';
import TopBar from './_topbar';
import Timer from './_timer';
import Inventory from './_inventory';
import Recipies from "./_recipies";
import Information from "./_info";
import Store from "./_store";
import Statistics from "./_stats";
import Settings from "./_settings";

import vegetables from "./vegetabledex.json"

const Home = () => {
  const [location, setLocation] = useState("menu");
  const [lastTimer, setLastTimer] = useState({type:"work", time:25, image:"/timerClock.svg", vegetable:"error"})
  const [transition, setTransition] = useState(false);
  const [displayTopBar, setDisplayTopBar] = useState(true);
  const [locTimeout, setLocTimeout] = useState(0);
  const [firstVisit, setFirstVisit] = useState(false);
  const [energy, setEnergy] = useState(0);
  const [money, setMoney] = useState(0);

  const updateMoney = (value, overwrite = false) => {
    if (overwrite) {
      setMoney(value);
      localStorage.setItem("money", value);
    }
    else {
      setMoney(state => {localStorage.setItem("money", state + value); return state + value})
    }
  }
  const updateEnergy = (value, overwrite = false) => {
    if (overwrite) {
      setEnergy(value);
      localStorage.setItem("energy", value);
    }
    else {
      setEnergy(state => {localStorage.setItem("energy", state + value); return state + value})
    }
  }

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
    //load data from localStorage
    updateMoney(parseInt(localStorage.getItem("money")) || 0, true);
    updateEnergy(parseInt(localStorage.getItem("energy")) || 3, true);


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
        <Timer lastTimer={lastTimer} moveTo={locationHandler} resolve={resolveTimer} vegRoot={lastTimer.vegetable}></Timer>
      </Fade>
      <Fade unmountOnExit in={location == "inventory" && !transition}>
        <Inventory setMoney={updateMoney}></Inventory>
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
        <Settings></Settings>
      </Fade>
    </Box>
    
  )
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





export default Home;