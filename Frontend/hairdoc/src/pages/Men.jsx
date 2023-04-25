// import './App.css';
import React, { useEffect, useState } from "react";
import axios from "axios";
import Haircut from "../Components/men/Haircut";
import Beard from "../Components/men/Beard";
import Haircolor from "../Components/men/Haircolor";
import SpaandTreatment from "../Components/men/SpaandTreatment";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
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
import { Heading } from "@chakra-ui/react";
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
  const MySwal = withReactContent(Swal);
  const [value, onChange] = useState(new Date());
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = React.useRef();
  const [cartData, setCartData] = useState([]);
  const handleDeleteItem = (item) => {
    let token = localStorage.getItem("token");
    axios
      .delete(`http://localhost:8080/cart/${item._id}`, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((res) => {
        if (
          res.data.message ===
          `Cart item with id - ${item._id} deleted sucessfully`
        ) {
          onClose();
          setTimeout(() => {
            MySwal.fire({
              position: "center",
              icon: "success",
              title: "Service deleted sucessfully",
              showConfirmButton: false,
              timer: 1500,
            });
          }, 500);
        } else {
          MySwal.fire({
            position: "center",
            icon: "error",
            title: item.data.message,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      })
      .catch((err) => console.log(err));
  };
  useEffect(() => {
    let token = localStorage.getItem("token");
    if (token) {
      axios
        .get("http://localhost:8080/cart", {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((res) => {
          let data = res.data.CartData;
          setCartData(data);
        })
        .catch((err) => console.log(err));
    }
  }, []);

  return (
    <>
      <Navbar />
      <div
        style={{
          display: "flex",
          justifyContent: "flex-end",
        }}
      >
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
        style={{
          position: "fixed",
          top: "90%",
          right: "3%",
          width: "50px",
          height: "50px",
          backgroundColor: "white",
          color: "white",
          borderRadius: "100%",
        }}
      >
        <img
          src="https://img.icons8.com/ios-glyphs/256/shopping-cart.png"
          alt="cart"
          style={{ objectFit: "contain" }}
        />
      </button>
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
            {cartData.length > 0 ? (
              cartData.map((item) => {
                return (
                  <div
                    style={{
                      width: "100%",

                      boxShadow: "rgba(99, 99, 99, 0.2) 0px 2px 8px 0px",
                      height: "25%",
                      borderRadius: "5px",
                      display: "flex",
                      justifyContent: "center",
                      marginBottom: "5%",
                      overflow: "hidden",
                    }}
                  >
                    {item.poster ? (
                      <img
                        alt="service"
                        style={{
                          height: "100%",
                          width: "40%",
                          objectFit: "cover",
                        }}
                        src={item.poster}
                      />
                    ) : null}

                    <div
                      style={{
                        alignItems: "center",
                        padding: "2%",
                        display: "flex",
                        flexDirection: "column",
                        width: "60%",
                      }}
                    >
                      <p style={{ textAlign: "center", width: "100%" }}>
                        {item.name}
                      </p>
                      <p style={{ margin: "auto" }}>₹{item.price}</p>``
                      <button
                        style={{
                          width: "70px",
                          borderRadius: "5px",
                          color: "white",
                          backgroundColor: "rgb(49,130,206)",
                        }}
                        onClick={() => {
                          handleDeleteItem(item);
                        }}
                      >
                        Delete
                      </button>
                    </div>
                  </div>
                );
              })
            ) : (
              <Heading as="h5" size="sm">
                No Services Added
              </Heading>
            )}
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
