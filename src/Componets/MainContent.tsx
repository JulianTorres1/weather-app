import { 
    Box,
    Container,
    Flex,
    Text,
    Spacer,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
     } from '@chakra-ui/react';
import { Component } from 'react';
import { TiWeatherCloudy } from 'react-icons/ti';
import { ExternalLinkIcon, ChevronDownIcon } from '@chakra-ui/icons'


// api key 178d76ed6e3419b81da19230acfe0964

class MainContent extends Component {
    render() {
        return (
            <Box pt={10}>
                <Container maxW='2xl' centerContent >
                    <Text fontWeight={'bold'} >Cartagena, Colombia</Text>
                    <Text as={'i'}>11-April-2022</Text>

                    <Box  
                        bgColor={'gray.100'}
                        borderRadius={10}
                        minW={'85%'}
                        minH={'50%'}
                        mt={'20'}
                        py={'5'}
                        px={'5'}
                        boxShadow='dark-lg'
                    >
                        <Flex>

                            <Flex 
                                flexDirection={'column'}

                                >
                                <Text 
                                    color='gray.500'
                                    fontWeight={'400'}
                                    fontStyle={'normal'}
                                    lineHeight={'25px'} >TEMPERATURE</Text>
                                <Text fontSize={'5xl'} >20°</Text>
                                <Text 
                                    color='gray.500'
                                    fontWeight={'semibold'}
                                     >Real feel: 20</Text>
                            </Flex>       
                            <Flex 
                                justify="center" 
                                flexDirection={'column'}
                                ml={80}
                                >
                                <Box mt={4}>
                                    <TiWeatherCloudy size={50}/>
                                </Box>
                                <Spacer/>
                                <Text as={'b'} >Cloudy</Text> 
                            </Flex> 

                        </Flex>      
                    </Box>

                    <Box mt={5}>
                        <Link href='https://chakra-ui.com' isExternal>
                            Show full weather report <ExternalLinkIcon mx='2px' />
                        </Link>
                        
                    </Box>

                    <Box
                        mt={10}
                    >
                        <Flex>
                            <Flex gap={4} mr={10} flexDirection={'column'} >
                                <Text color='gray.500' >UV Index</Text>
                                <Text color='gray.500' >Humidity</Text>
                                <Text color='gray.500' >Wind Speed</Text>
                                <Text color='gray.500' >Rain Probability</Text>
                                <Text color='gray.500' >Pressure</Text>
                            </Flex>
                            <Spacer/>
                            <Flex gap={4} ml={10} flexDirection={'column'} >
                                <Text as='b' >1.0</Text>
                                <Text as='b' >55</Text>
                                <Text as='b' >5.00 Mph</Text>
                                <Text as='b' >30%</Text>
                                <Text as='b' >1023.1 pa</Text>
                            </Flex>
                        </Flex>
                    </Box>

                    <Box mt={10} >
                        <Menu>
                            <MenuButton as={Button} rightIcon={<ChevronDownIcon />}>
                                Change City
                            </MenuButton>
                            <MenuList>
                                <MenuItem>Download</MenuItem>
                                <MenuItem>Create a Copy</MenuItem>
                                <MenuItem>Mark as Draft</MenuItem>
                                <MenuItem>Delete</MenuItem>
                                <MenuItem>Attend a Workshop</MenuItem>
                            </MenuList>
                        </Menu>
                    </Box>

                </Container>
            </Box>
        )
    }
}

export default MainContent;