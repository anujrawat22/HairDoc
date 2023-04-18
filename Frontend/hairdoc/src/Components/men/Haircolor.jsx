import React, { useEffect, useState } from "react";
import axios from "axios";

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
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

function Haircolor() {
  const [haircolorData, setHairColorData] = useState([]);
  const handleData = (item)=>{
    console.log(item)
    }
  useEffect(() => {
    axios
      .get("https://sleepy-foal-waders.cyclic.app/men/haircolor/")
      //   .then(res=> console.log(res.data))
      .then((res) => setHairColorData(res.data));
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
      {haircolorData.length > 0 ? (
        haircolorData.map((item) => {
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
                    onClick={()=>{
                      handleData(item)
                    }}>
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

export default Haircolor;
