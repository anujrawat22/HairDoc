import React from 'react';
import { Box, Flex, Link, Text, Stack, IconButton } from '@chakra-ui/react';
import { FaCalendar, FaMailBulk ,FaPhone} from 'react-icons/fa';

const Footer = () => {
  return (
    <Box bg='gray.900' color='white' py='12'>
      <Stack direction={{ base: 'column', md: 'row' }} spacing={{ base: '6', md: '20' }}>
        <Box flex='1'>
          <Text fontSize='xl' fontWeight='bold' mb='4'>HairDoc</Text>
          <Text fontSize='lg' lineHeight='tall'>
            At HairDoc, we provide quality hair styling services to help you look and feel your best. Our team of experienced hair stylists are dedicated to giving you the look you want, whether it's a simple trim or a complete hair makeover.
          </Text>
        </Box>
        <Box flex='1'>
          <Text fontSize='xl' fontWeight='bold' mb='4'>About us</Text>
          <Flex direction='column' fontSize='lg'>
            <Link href='#' mb='2'><IconButton icon={<FaMailBulk/>} size='lg' variant='ghost'/> hairdoc1234@gmail.com</Link>
            <Link href='#' mb='2'><IconButton icon={<FaPhone/>} size='lg' variant='ghost'/>+91 99 99 99 99 99</Link>
            <Link href='#' mb='2'><IconButton icon={<FaCalendar/>} size='lg' variant='ghost'/>Working Days : Monday - Sunday</Link>
            <Link href='#' mb='2'>Working Hours: 10:00 AM - 6:00 PM</Link>
          </Flex>
        </Box>
      </Stack>
      <Text mt='8' fontSize='lg' textAlign='center'>&copy; 2023 HairDoc. All Rights Reserved.</Text>
    </Box>
  );
};

export default Footer;