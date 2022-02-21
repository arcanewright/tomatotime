import Head from 'next/head'
import { Box, Text, Button, Center, Flex, Heading, IconButton, Image, createIcon, Icon, useDisclosure, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, CircularProgress, CircularProgressLabel, Spacer, useTimeout, Fade, useInterval, Switch, FormControl, FormLabel, useColorMode, NumberInput, NumberInputField, NumberInputStepper, NumberIncrementStepper, NumberDecrementStepper, FormHelperText } from '@chakra-ui/react'
import { useEffect, useState } from 'react';
import { focusNextTabbable } from '@chakra-ui/utils';



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
            setMoney(state[i].worth);
          }
          else {
            setMoney(state[i].worth);
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

export default Inventory;