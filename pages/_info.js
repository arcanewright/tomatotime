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
          <Heading size="lg" mb="2">Game Info</Heading>
          <Heading size="md"  mb="2">What this is</Heading>
          <Text  mb="2">This is an RPG implementation of a Tomato (or Pomodoro) Timer, a tried and tested productivity technique!</Text>
          <Text  mb="2">You set a timer (usually 25 mins) during which you work. Then, you take a short (usually 5 mins) break. </Text>
          <Heading size="md" mb="2">Gameplay</Heading>
          <Text  mb="2">For every timer you complete, you get a vegetable of your choice. Your chances are the same regardless of timer length.</Text>
          <Text  mb="2">Every time you take a break, your energy recharges to full.</Text>
          <Text  mb="2">You can use vegetables and energy to make recipies, which change every day, and earn coins by fulfilling the requests.</Text>
          <Text  mb="2">At the store, you can spend coins to get upgrades and consumables.</Text>
          <Heading size="md"  mb="2">Stats</Heading>
          <Text  mb="2">You can view your statistics in the Stats menu.</Text>
          <Heading size="lg"  mb="2">Project Info</Heading>
          <Heading size="md"  mb="2">Report Bugs / Feedback</Heading>
          <Text  mb="2">Visit the project&apos;s Github page to report bugs or leave suggestions:</Text>
          <Link href="https://github.com/arcanewright/tomatotime"  mb="2">
            <Button colorScheme="purple">Github</Button>
          </Link>
          <Heading size="md"  mb="2" >Tech Used</Heading>
          <Text  mb="2">React, Next.JS, Chakra UI, Google Noto Sans Emoji, Google Fonts</Text>
          <Heading size="md"  mb="2">Data</Heading>
          <Text  mb="2">All data is stored locally on the machine. If you clear your browsing data, you will lose all progress in this app.</Text>
          <Heading size="md"  mb="2" >About Me</Heading>
          <Text  mb="2">Hi, I&apos;m arcanewright. I make websites for fun. Check out my other projects on my github, or on my website:</Text>
          <Link  href="https://arcanewright.com"  mb="2">
            <Button colorScheme="blue">Arcane Wright</Button>
          </Link>
          <Text  mb="2">You can also find me on reddit!</Text>
        </Flex>
      </Center>
    </Flex></>)
  }
  
  

  export default Information;