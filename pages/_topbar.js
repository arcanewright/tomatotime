import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';


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

  export default TopBar;