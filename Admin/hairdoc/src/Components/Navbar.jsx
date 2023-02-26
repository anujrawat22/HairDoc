import React from 'react';
import {
  Box,
  Flex,
  HStack,
  Link,
  IconButton,
  useDisclosure,
  Stack,
  useColorModeValue,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon } from '@chakra-ui/icons';


const Navbar = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <Box>
      <Flex
        bg={useColorModeValue('gray.100', 'gray.900')}
        color={useColorModeValue('gray.600', 'white')}
        minH={'60px'}
        py={{ base: 2 }}
        px={{ base: 4 }}
        borderBottom={1}
        borderStyle={'solid'}
        borderColor={useColorModeValue('gray.200', 'gray.900')}
        align={'center'}
      >
        <Flex
          flex={{ base: 1, md: 'auto' }}
          ml={{ base: -2 }}
          display={{ base: 'flex', md: 'none' }}
        >
          <IconButton
            onClick={isOpen ? onClose : onOpen}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant={'ghost'}
            aria-label={'Toggle Navigation'}
          />
        </Flex>
        <Flex flex={{ base: 1 }} justify={{ base: 'center', md: 'start' }}>
          <Link
            textAlign={useColorModeValue('center', 'center')}
            fontFamily={'heading'}
            color={useColorModeValue('gray.800', 'white')}
            href={'/'}
          >
            HairDoc salon admin
          </Link>

          <Flex display={{ base: 'none', md: 'flex' }} ml={10}>
            <HStack spacing={8}>

              <Link key={0} fontWeight={500} color={'gray.500'} href={'/mens'}>Mens</Link>
              <Link key={0} fontWeight={500} color={'gray.500'} href={'/mens'}>Womens</Link>
              <Link key={0} fontWeight={500} color={'gray.500'} href={'/mens/beard'}>All Appointment</Link>
            </HStack>
          </Flex>
        </Flex>

        <Stack
          flex={{ base: 1, md: 0 }}
          justify={'flex-end'}
          direction={'row'}
          spacing={6}
        >

        </Stack>
      </Flex>

      {isOpen ? (
        <Box pb={4} display={{ md: 'none' }}>
          <Stack as={'nav'} spacing={4}>

            <Link key={0} fontWeight={500} color={'gray.500'} href={'/mens'}>Mens</Link>
            <Link key={0} fontWeight={500} color={'gray.500'} href={'/mens/beard'}>Womens</Link>
            <Link key={0} fontWeight={500} color={'gray.500'} href={'/mens/beard'}>All Appointment</Link>

          </Stack>
        </Box>
      ) : null}
    </Box>
  );
};

export default Navbar;
