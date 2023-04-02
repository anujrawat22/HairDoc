// import './App.css';
import React, { useState,  useEffect, useContext } from "react";
import {
  Card,
  CardBody,
  Heading,
  Image,
  Stack,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import Haircut from "../Components/men/Haircut";
import Beard from "../Components/men/Beard";
import Haircolor from "../Components/men/Haircolor";
import SpaandTreatment from "../Components/men/SpaandTreatment";

import axios from "axios";
import { IdContext } from "../Components/men/Contexts/Id_context";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import Navbar from "../Components/Navbar";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  
  Button,
} from "@chakra-ui/react";

import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'

import DatePicker from 'react-date-picker';

import "react-datepicker/dist/react-datepicker.css";

function Men() {
  const { id, setId } = useContext(IdContext);
  const [data, setData] = useState({
    hairCut: {},
    beard: {},
    spa: {},
    hairColor: {},
  });
  const [hair, sethair] = useState({});
  const [ beard , setBeard ] = useState({})
  const [color , setColor] = useState({})
  const [ spa, setSpa] = useState({})
  const [cartArr , setCartArr] = useState([])
  let [sum,setSum] = useState(0)
  const total = ()=>{
     if(cartArr.length>0){
      cartArr.forEach((item)=>{
        setSum(x => x+item.price)
      })
     }
    console.log(sum,'sum')
  }
  const [value, onChange] = useState(new Date());
  useEffect(() => {
    if (id.hairId !== "") {
      axios
        .get(`https://sleepy-foal-waders.cyclic.app/men/haircut/search/${id.hairId}`)
        .then((res) => {
          sethair({...res.data[0]})
          setCartArr([...cartArr,res.data[0]])
        });

        console.log(cartArr,'cartarr')
    }


    if(id.beardId!== ''){
      axios
      .get(`https://sleepy-foal-waders.cyclic.app/men/beard/search/${id.beardId}`)
      .then(res=>{
        setBeard({...res.data[0]})
        setCartArr([...cartArr,res.data[0]])
      })

     
  }

  if(id.colorId!== ''){
    axios.get(`https://sleepy-foal-waders.cyclic.app/men/haircolor/search/${id.colorId}`)

    .then(res=>{
      setColor({...res.data[0]})
      setCartArr([...cartArr,res.data[0]])
    })

    
}


if(id.spaId!== ''){
  axios.get(`https://sleepy-foal-waders.cyclic.app/men/spa/search/${id.spaId}`)
  .then(res=>{
    setSpa({...res.data[0]})
    setCartArr([...cartArr,res.data[0]])
  })

  
}


  }, [id]);

  const { isOpen, onOpen, onClose } = useDisclosure();
  const { isOpen: isDrawerOpen , onOpen: onDrawerOpen, onClose: onDrawerClose } = useDisclosure()
const { isOpen: isModalOpen , onOpen: onModalOpen, onClose: onModalClose } = useDisclosure()
  const btnRef = React.useRef();


  return (
    <>
      <Navbar />
      <div style={{width : '50vh',marginLeft : '70vw',display:'flex',justifyContent : 'space-around'}}>
        <h1>Select Slot :</h1>
      <DatePicker onChange={onChange} value={value} style={{}}/>
      <select name="time" id="time">
        <option value="9:00 AM">9:00 AM</option>
        <option value="11:00 AM">11:00 AM</option>
        <option value="1:00 PM">1:00 PM</option>
        <option value="3:00 PM">3:00 PM</option>
        <option value="5:00 PM">5:00 PM</option>
      </select>
      </div>
      

      <Tabs>
  <TabList>
    <Tab>Hair Cut</Tab>
    <Tab>Beard Cut</Tab>
    <Tab>Hair Color</Tab>
    <Tab>Spa and Treatment</Tab>
  </TabList>

  <TabPanels>
    <TabPanel>
    <Haircut />
    </TabPanel>
    <TabPanel>
    <Beard />
    </TabPanel>
    <TabPanel>
    <Haircolor />
    </TabPanel>
    <TabPanel>
    <SpaandTreatment />
    </TabPanel>
  </TabPanels>
</Tabs>




      

      <Button
        ref={btnRef}
        onClick={onDrawerOpen}
        style={{
          width: "4rem",
          height: "4rem",
          borderRadius: "50%",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          position: "fixed",
          top: "88vh",
          left: "91vw",
        }}
      >
        <img
          src="https://img.icons8.com/ios-glyphs/256/shopping-cart.png"
          alt="cart"
          style={{ objectFit: "contain" }}
        />
      </Button>
      <Drawer
        isOpen={isDrawerOpen}
        placement="right"
        onClose={onDrawerClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody style={{display : 'flex' , flexDirection : 'column',gap : '20px'}}>
            {Object.keys(hair).length > 0 ? (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  boxSize='100px'
                  maxW={{ base: "100%", sm: "100px" }}
                  src={hair.poster}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="sm">{hair.name}</Heading>

                    <Text fontSize="sm">Total : ₹ {hair.price}</Text>
                  </CardBody>

                </Stack>
              </Card>
            ) : null}

{Object.keys(beard).length > 0 ? (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  boxSize='100px'
                  maxW={{ base: "100%", sm: "100px" }}
                  src={beard.poster}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="sm">{beard.name}</Heading>

                    <Text fontSize="sm">Total : ₹ {beard.price}</Text>
                  </CardBody>

                </Stack>
              </Card>
            ) : null}



{Object.keys(color).length > 0 ? (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
                <Image
                  objectFit="cover"
                  boxSize='100px'
                  maxW={{ base: "100%", sm: "100px" }}
                  src={color.poster}
                  alt="Caffe Latte"
                />

                <Stack>
                  <CardBody>
                    <Heading size="sm">{color.name}</Heading>

                    <Text fontSize="sm">Total : ₹ {color.price}</Text>
                  </CardBody>

                </Stack>
              </Card>
            ) : null}


{Object.keys(spa).length > 0 ? (
              <Card
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
              >
            

                <Stack>
                  <CardBody>
                    <Heading size="sm">{spa.name}</Heading>

                    <Text fontSize="sm">Total : ₹ {spa.memberprice}</Text>
                  </CardBody>

                </Stack>
              </Card>
            ) : null}




          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Close
            </Button>
            <Button colorScheme="blue" onClick={()=>{
              total()
              onModalOpen()
            }}>Checkout</Button>




            

<Modal isOpen={isModalOpen} onClose={onModalClose}>
  <ModalOverlay />
  <ModalContent>
    <ModalHeader>Proceed To Payment</ModalHeader>
    <ModalCloseButton />
    <ModalBody>
      <Text>Your Total is : {sum}</Text>
    </ModalBody>

    <ModalFooter>
      <Button colorScheme='blue' mr={3} onClick={onModalClose}>
        Close
      </Button>
      <Button variant='ghost'>Pay Now</Button>
    </ModalFooter>
  </ModalContent>
</Modal>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Men;
