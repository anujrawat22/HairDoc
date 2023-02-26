import React from 'react';
import { ReactNode,useState } from 'react';
import {
  Box,
  IconButton,
  useBreakpointValue,
  Stack,
  Heading,
  Text,
  Container,
} from '@chakra-ui/react';
import { BiLeftArrowAlt, BiRightArrowAlt } from 'react-icons/bi';
import Slider from 'react-slick';
import { color } from 'framer-motion';

const settings = {
  dots: true,
  arrows: false,
  fade: true,
  infinite: true,
  autoplay: true,
  speed: 500,
  autoplaySpeed: 5000,
  slidesToShow: 1,
  slidesToScroll: 1,
};

  const CaptionCarousel= ()=> {
  const [slider,setSlider]=useState(null)
  const top = useBreakpointValue({ base: '90%', md: '50%' });
  const side = useBreakpointValue({ base: '30%', md: '40px' });

  const cards = [
    {
      title: '',
     
      text:
      "Look Special on your Wedding with Top Makeup Artists in India. Book the best bridal makeup package from top.Our team of experienced hair stylists are dedicated to giving you the look you want",
      image:'https://exoticindianbeauty.com.au/wp-content/uploads/2021/07/eex.jpg'
        // 'https://t4.ftcdn.net/jpg/01/81/61/29/360_F_181612908_uiOH8a4qWiNGuGS2Pg5dgwUIKJZ0C02w.jpg'
    },
    {
      title: '',
      text:
      "Look Special on your Wedding with Top Makeup Artists in India. Book the best bridal makeup package from top & verified bridal makeup artists in All Over India.",

      image:
      'https://img4.nbstatic.in/tr:w-500/592811bccff47e000adffcf4.jpg'
// 'https://media.istockphoto.com/id/1325440885/photo/retro-styled-beauty-salon.jpg?s=612x612&w=0&k=20&c=uEdh3ypS-Zeq9X5YJzIfBaiaoFYstRFNowZBTbQWT8I='    
},
    {
      title: 'Womens hairstylists',
      text:
      "Look Special on your Wedding with Top Makeup Artists in India. Book the best bridal makeup package from top & verified bridal makeup artists in All Over India.",
      image:
      'https://www.softwaresuggest.com/blog/wp-content/uploads/2019/09/salon-business.png' 
      // 'https://images.unsplash.com/photo-1507237998874-b4d52d1dd655?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1yZWxhdGVkfDR8fHxlbnwwfHx8fA%3D%3D&auto=format&fit=crop&w=900&q=60',
    },
  ];

  return (
    <>
    <Box
      position={'relative'}
      height={'600px'}
      width={'full'}
      overflow={'hidden'}>

      <link
      color={'white'}
        rel="stylesheet"
        type="text/css"
        charSet="UTF-8"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick.min.css"
      />
      <link
        rel="stylesheet"
        type="text/css"
        href="https://cdnjs.cloudflare.com/ajax/libs/slick-carousel/1.6.0/slick-theme.min.css"
      />

      <IconButton
        aria-label="left-arrow"
        variant="ghost"
        position="absolute"
        left={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickPrev()}>
        <BiLeftArrowAlt size="40px" />
      </IconButton>

      <IconButton
        aria-label="right-arrow"
        variant="ghost"
        position="absolute"
        right={side}
        top={top}
        transform={'translate(0%, -50%)'}
        zIndex={2}
        onClick={() => slider?.slickNext()}>
        <BiRightArrowAlt size="40px" />
      </IconButton>

      <Slider {...settings} ref={(slider) => setSlider(slider)}>
        {cards.map((card, index) => (
          <Box
            key={index}
            height={'100vh'}
            position="relative"
            backgroundPosition="center"
            backgroundRepeat="no-repeat"
            backgroundSize="cover"
            backgroundImage={`url(${card.image})`}>

            <Container size="container.lg" height="600px" position="relative">
              <Stack
                spacing={6}
                w={'full'}
                maxW={'lg'}
                position="absolute"
                top="50%"
                transform="translate(0, -50%)">
                <Heading fontSize={{ base: '3xl', md: '4xl', lg: '5xl' }}>
                  {card.title}
                </Heading>
                <Text fontSize={{ base: 'md', lg: '30px' }} color="whiteAlpha.900">
                  {card.text}
                </Text>
              </Stack>
            </Container>
          </Box>
        ))}
      </Slider>
    </Box>
    </>
  );
}

export default CaptionCarousel