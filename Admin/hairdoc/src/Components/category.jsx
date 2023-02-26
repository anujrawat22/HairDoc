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

export default function Mens() {

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
                        Mens Beard Cut

                    </Link>
                </Flex>
                <Flex>
                    <Link textAlign={useColorModeValue('center', 'center')}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                        href={'/mens/hair'}
                    >
                        Mens Hair Cut

                    </Link>
                </Flex>
                <Flex>
                    <Link textAlign={useColorModeValue('center', 'center')}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                        href={'/mens/color'}
                    >
                        Mens Coloring

                    </Link>
                </Flex>
                <Flex>
                    <Link textAlign={useColorModeValue('center', 'center')}
                        fontFamily={'heading'}
                        color={useColorModeValue('gray.800', 'white')}
                        href={'/mens/spa'}
                    >
                        Mens Spa

                    </Link>
                </Flex>
        </VStack>
        </Box>
    )
}