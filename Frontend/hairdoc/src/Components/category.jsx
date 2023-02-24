import LevelImg from '../images/Level.png'
import {
    Container,
    SimpleGrid,
    Image,
    Flex,
    Heading,
    Text,
    Stack,
    StackDivider,
    Icon,
    useColorModeValue,
  } from '@chakra-ui/react';
  import {
    IoAnalyticsSharp,
    IoSearchSharp,
    IoMen,
    IoRose,
    IoChatbubble
  } from 'react-icons/io5';
  import { ReactElement } from 'react';
  
  const FeatureProps ={
    text: String,
    iconBg: String,
    icon: ReactElement
  }
  
  const Feature = ({ text, icon, iconBg }=FeatureProps) => {
    return (
      <Stack direction={'row'} align={'center'}>
        <Flex
          w={8}
          h={8}
          align={'center'}
          justify={'center'}
          rounded={'full'}
          bg={iconBg}>
          {icon}
        </Flex>
        <Text fontWeight={600}>{text}</Text>
      </Stack>
    );
  };
  
  export default function SplitWithImage() {
    return (
      <Container maxW={'5xl'} py={12}>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <Stack spacing={4}>
            <Text
              textTransform={'uppercase'}
              color={'blue.400'}
              fontWeight={600}
              fontSize={'sm'}
              bg={useColorModeValue('blue.50', 'blue.900')}
              p={2}
              alignSelf={'flex-start'}
              rounded={'md'}>
              Our Story
            </Text>
            <Heading>A digital system for booking appointment</Heading>   
            <Text color={'gray.500'} fontSize={'lg'}>
             We have experienced hair stylists, dedicated to giving you the look you want. We provide following services:
            </Text>
            <Stack
              spacing={4}
              divider={
                <StackDivider
                  borderColor={useColorModeValue('gray.100', 'gray.700')}
                />
              }>
              <Feature
                icon={
                  <Icon as={IoRose} color={'yellow.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('yellow.100', 'yellow.900')}
                text={'Womens makeup and hair services'}
              />
              <Feature
                icon={<Icon as={IoRose} color={'green.500'} w={5} h={5} />}
                iconBg={useColorModeValue('green.100', 'green.900')}
                text={'Mens hair and beard stylist'}
              />
              <Feature
                icon={
                  <Icon as={IoSearchSharp} color={'purple.500'} w={5} h={5} />
                }
                iconBg={useColorModeValue('purple.100', 'purple.900')}
                text={'Hair treatment blogs'}
              />
            </Stack>
          </Stack>
          <Flex>
            <Image
              rounded={'md'}
              alt={'feature image'}
              src={
                LevelImg
              }
              objectFit={'cover'}
            />
          </Flex>
        </SimpleGrid>
      </Container>
    );
  }