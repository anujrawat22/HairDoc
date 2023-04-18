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
} from "@chakra-ui/react";
import { Spinner } from "@chakra-ui/react";

function SpaandTreatment() {
  const [spaData, setspaData] = useState([]);
  const handleData = (item)=>{
    console.log(item)
    }
  useEffect(() => {
    axios
      .get("https://sleepy-foal-waders.cyclic.app/men/spa/")
      //   .then(res=> console.log(res.data))
      .then((res) => setspaData(res.data));
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
      {spaData.length > 0 ? (
        spaData.map((item) => {
          return (
            <>
              <Card maxW="sm" key={item._id}>
                <CardBody>
                  <Stack mt="6" spacing="3">
                    <Heading size="md">{item.name}</Heading>
                    <Text fontSize="2xl">
                      Member Price : {item.memberprice}
                    </Text>
                    <Text fontSize="2xl">
                      Non Member Price : {item.nonmemberprice}
                    </Text>
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

export default SpaandTreatment;
