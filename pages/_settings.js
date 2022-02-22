import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';


const Settings = () => {

    const [darkMode, setDarkMode] = useState();
    const [playAlarm, setPlayAlarm] = useState(true);
    const [loopAlarm, setLoopAlarm] = useState(false);
    const [defaultTime, setDefaultTime] = useState(25);
    const [continueOffline, setContinueOffline] = useState(true);
    const [storeGameData, setStoreGameData] = useState(true);
    const [storeStatistics, setStoreStatistics] = useState(true);
  
    useEffect(() => {
      setPlayAlarm(localStorage.getItem("s-play-alarm") == 'true');
      setLoopAlarm(localStorage.getItem("s-loop-alarm") == 'true');
      setDefaultTime(parseInt(localStorage.getItem("s-default-time")) || 25);
      setContinueOffline(localStorage.getItem("s-continue-offline") == 'true');
      setStoreGameData(localStorage.getItem("s-store-game") == 'true');
      setStoreStatistics(localStorage.getItem("s-store-stats") == 'true');

    }, [])

    const handleSetting = (setting, value) => {
      localStorage.setItem(setting, value);
      if (setting == "s-play-alarm") {
        setPlayAlarm(value);
      }
      else if (setting == "s-loop-alarm") {
        setLoopAlarm(value);
      }
      else if (setting == "s-default-time") {
        setDefaultTime(value);
      }
      else if (setting == "s-continue-offline") {
        setContinueOffline(value);
      }
      else if (setting == "s-store-game") {
        setStoreGameData(value);
      }
      else if (setting == "s-store-stats") {
        setStoreStatistics(value);
      }
    }
  
    const eraseGameData = () => {
      localStorage.removeItem("inventory");
      localStorage.removeItem("money");
      localStorage.removeItem("energy")
    }
    const eraseStatistics = () => {
      localStorage.removeItem("stats")
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
            {/* <Flex justify="space-between" m="2">
              <FormLabel htmlFor="dark-mode" mb="0">
                Dark Mode
              </FormLabel>
              <Switch id="dark-mode" isChecked={darkMode} onChange={() => setDarkMode(state => !state)}></Switch>
            </Flex>  */}
            <Flex justify="space-between" m="2">
              <FormLabel htmlFor="alarm" mb="0">
                Play Alarm
              </FormLabel>
              <Switch id="alarm" isChecked={playAlarm} onChange={() => handleSetting("s-play-alarm", !playAlarm)}></Switch>
            </Flex>
            <Flex justify="space-between" m="2">
              <FormLabel htmlFor="alarm-loop" mb="0">
                Loop Alarm
              </FormLabel>
              <Switch id="alarm-loop" isChecked={loopAlarm} isDisabled={!playAlarm} onChange={() => handleSetting("s-loop-alarm", !loopAlarm)}></Switch>
            </Flex>
            <Flex justify="space-between" align="center" m="2">
              <FormLabel htmlFor="default-time" mb="0">Default Work Timer (mins)</FormLabel>
              <NumberInput step={5} value={defaultTime} onChange={(val) => handleSetting("s-default-time", parseInt(val))} min={5} max={90} size="md" maxW="20">
                <NumberInputField></NumberInputField>
                <NumberInputStepper>
                  <NumberIncrementStepper></NumberIncrementStepper>
                  <NumberDecrementStepper></NumberDecrementStepper>
                </NumberInputStepper>
              </NumberInput>
            </Flex>
            <Flex justify="space-between" m="2" align="center">
              <FormLabel htmlFor="continue-countdown" mb="0">Continue Timer While Offline</FormLabel>
              <Switch id="continue-countdown" isChecked={continueOffline} onChange={()=> handleSetting("s-continue-offline", !continueOffline)}></Switch>
            </Flex>
            <Heading size="md" p="2">Data</Heading>
            
            <Flex justify="space-between" m="2" align="center">
              <FormLabel htmlFor="game-data" mb="0">Store Game Data</FormLabel>
              <Switch id="game-data" isChecked={storeGameData} onChange={() => handleSetting("s-store-game", !storeGameData)}></Switch>
            </Flex>
            <FormHelperText m="2">Warning: Disabling Game Storage disables the Ingredient, Money, Energy, Inventory, Recipie, and Store systems.</FormHelperText>
            <Flex justify="space-between" m="2" align="center">
              <FormLabel htmlFor="game-data" mb="0">Delete Existing Game Data</FormLabel>
              <EraseGameData erase={eraseGameData}></EraseGameData>
            </Flex>
            <Flex justify="space-between" m="2" align="center">
              <FormLabel htmlFor="statistics" mb="0">Store Statistics</FormLabel>
              <Switch id="statistics" isChecked={storeStatistics} onChange={() => handleSetting("s-store-stats", !storeStatistics)}></Switch>
            </Flex>
            <FormHelperText m="2">Warning: Disabling Statistics Storage disables the Statistics system.</FormHelperText>
            <Flex justify="space-between" m="2" align="center">
              <FormLabel htmlFor="game-data" mb="0">Delete Existing Statistics Data</FormLabel>
              <EraseStatistics erase={eraseStatistics}></EraseStatistics>
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

  
  export default Settings;