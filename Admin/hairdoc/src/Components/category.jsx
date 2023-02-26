import React from 'react';
import {
    Box,
    Flex,
    HStack,
    Link,
    IconButton,
    useDisclosure,
    Stack,
    Text,
    VStack,
    useColorModeValue,
} from '@chakra-ui/react';
import Navbar from './Navbar';

export default function Category(props) {
    const {text}=props
    return (
        <Box>
        <Navbar/>
        <VStack bg={useColorModeValue('gray.100', 'gray.900')}
                color={useColorModeValue('gray.600', 'white')}
                justify={'space-evenly'}
                borderBottom={1}
                borderStyle={'solid'}
                borderColor={useColorModeValue('gray.200', 'gray.900')}
                align={'center'}>
            <Flex >
                    <Link textAlign={useColorModeValue('center', 'center')}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                        href={'/mens/beard'}
                    >
                        {/* Mens Beard Cut */}
                        {text[0]}

                    </Link>
                </Flex>
                <Flex>
                    <Link textAlign={useColorModeValue('center', 'center')}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                        href={'/mens/hair'}
                    >
                        {/* Mens Hair Cut */}
                        {text[1]}

                    </Link>
                </Flex>
                <Flex>
                    <Link textAlign={useColorModeValue('center', 'center')}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                        href={'/mens/color'}
                    >
                        {/* Mens Coloring */}
                        {text[2]}

                    </Link>
                </Flex>
                <Flex>
                    <Link textAlign={useColorModeValue('center', 'center')}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                        href={'/mens/spa'}
                    >
                        {/* Mens Spa */}
                        {text[3]}

                    </Link>
                </Flex>
        </VStack>
        </Box>
    )
}