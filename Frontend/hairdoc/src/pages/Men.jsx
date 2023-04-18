// import './App.css';
import React, { useState } from "react";

import Haircut from "../Components/men/Haircut";
import Beard from "../Components/men/Beard";
import Haircolor from "../Components/men/Haircolor";
import SpaandTreatment from "../Components/men/SpaandTreatment";
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
} from "@chakra-ui/react";

import {
  Tabs,
  TabList,
  TabPanels,
  Tab,
  TabPanel,
  useDisclosure,
} from "@chakra-ui/react";
import Navbar from "../Components/Navbar";

import DatePicker from "react-date-picker";

import "react-datepicker/dist/react-datepicker.css";

function Men() {
  const [value, onChange] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  return (
    <>
      <Navbar />
      <div
        style={{
          width: "50vh",
          marginLeft: "70vw",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <h1>Select Slot :</h1>
        <DatePicker onChange={onChange} value={value} style={{}} />
        <select name="time" id="time">
          <option value="9:00 AM">9:00 AM</option>
          <option value="11:00 AM">11:00 AM</option>
          <option value="1:00 PM">1:00 PM</option>
          <option value="3:00 PM">3:00 PM</option>
          <option value="5:00 PM">5:00 PM</option>
        </select>
      </div>

      <Tabs variant="enclosed" colorScheme="blue">
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

      <button
        ref={btnRef}
        onClick={onOpen}
        style={{ position: "fixed", top: "90%", right: "3%",width:"50px",height:"50px",backgroundColor:"white",color:"white",borderRadius:"100%" }}
      ><img
      src="https://img.icons8.com/ios-glyphs/256/shopping-cart.png"
      alt="cart"
      style={{ objectFit: "contain" }}
    /></button>
      <Drawer
        isOpen={isOpen}
        placement="right"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Cart</DrawerHeader>

          <DrawerBody>
            
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Cancel
            </Button>
            <Button colorScheme="blue">Book Now</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default Men;
