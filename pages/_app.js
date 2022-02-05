import '../styles/globals.css'

import { ChakraProvider, extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts:{
    heading:"Roboto",
    body:"Roboto Slab"
  }
})

function MyApp({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
      <Component {...pageProps} />
    </ChakraProvider>
}

export default MyApp
