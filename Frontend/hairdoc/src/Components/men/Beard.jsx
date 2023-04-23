import React, { useEffect, useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";
import {
  Card,
  CardBody,
  CardFooter,
  Stack,
  Heading,
  Text,
  Divider,
  Button,
  Image,
  Spinner,
} from "@chakra-ui/react";

function Beard() {
  const MySwal = withReactContent(Swal);
  const [beardData, setbeardData] = useState([]);
  const handleData = async (item) => {
    item.serviceType = 'beard'
    let token = localStorage.getItem("token");
    if (token) {
      let response = await fetch("http://localhost:8080/cart", {
        method: "POST",
        body: JSON.stringify(item),
        headers: {
          "Content-type": "Application/json",
          Authorization : `Bearer ${token}`
        },
      });
      let data = await response.json();
      if(data.msg === "Item already exists"){
        MySwal.fire({
          icon: 'error',
          title: `Can't book same service on the same day`,      
        })
      }else{
        MySwal.fire({
          position: 'center',
          icon: 'success',
          title: 'Item added to cart',
          showConfirmButton: false,
          timer: 1500
        })
      }
    } 
  };
  useEffect(() => {
    axios
      .get("http://localhost:8080/men/beard/")
      //   .then(res=> console.log(res.data))
      .then((res) => setbeardData(res.data));
    // console.log(id)
  }, []);

  return (
    <div
      className="main"
      style={{
        display: "flex",
        gap: "2rem",
        flexWrap: "wrap",
        flexBasis: "200px",
        margin: "2rem",
        justifyContent: "center",
      }}
    >
      {beardData.length > 0 ? (
        beardData.map((item) => {
          return (
            <>
              <Card maxW="sm" key={item._id}>
                <CardBody>
                  <Image
                    src={item.poster}
                    alt="Green double couch with wooden legs"
                    borderRadius="lg"
                    style={{ width: "90%", height: "75%" }}
                  />
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{item.name}</Heading>
                    <Text fontSize="2xl">Only at : ₹ {item.price}</Text>
                  </Stack>
                </CardBody>
                <Divider />
                <CardFooter
                  style={{ display: "flex", justifyContent: "center" }}
                >
                  <Button
                    id={item._id}
                    variant="solid"
                    colorScheme="blue"
                    style={{ width: "20vw" }}
                    onClick={() => {
                      handleData(item);
                    }}
                  >
                    Add to Cart
                  </Button>
                </CardFooter>
              </Card>
            </>
          );
        })
      ) : (
        <Spinner
          thickness="4px"
          speed="0.65s"
          emptyColor="gray.200"
          color="blue.500"
          size="xl"
        />
      )}
    </div>
  );
}

export default Beard;
