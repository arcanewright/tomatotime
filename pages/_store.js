import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';


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

  export default Store;