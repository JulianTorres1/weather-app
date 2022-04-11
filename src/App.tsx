import * as React from "react"
import {
  ChakraProvider,
  Box,
  Text,
  Link,
  VStack,
  Code,
  Grid,
  theme,
} from "@chakra-ui/react"
import { ColorModeSwitcher } from "./ColorModeSwitcher"
import { Logo } from "./Logo"

// Components
import Navbar from "./Componets/Navbar";
import MainContent from "./Componets/MainContent"; 
import CustomTheme from "./Componets/CustomTheme";

export const App = () => (
  <ChakraProvider theme={CustomTheme}>
    <Box>
      <Navbar/>
      <MainContent/>
    </Box>
  </ChakraProvider>
)


