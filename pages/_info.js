import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText, Link } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';


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
          <Heading size="md" m="2">Report Bugs</Heading>
          <Text  m="2">Visit the Github page to report bugs or leave suggestions:</Text>
          <Link  m="2" href="https://github.com/arcanewright/tomatotime">
            <Button colorScheme="purple">Github</Button>
          </Link>
          <Heading size="md"  m="2">About Me</Heading>
          <Text  m="2">Hi, I&apos;m arcanewright. I make websites for fun. Check out my other projects on my github, or on my website:</Text>
          <Link  m="2" href="https://arcanewright.com">
            <Button colorScheme="blue">Arcane Wright</Button>
          </Link>
          <Text m="2">You can also find me on reddit!</Text>
        </Flex>
      </Center>
    </Flex></>)
  }
  
  

  export default Information;