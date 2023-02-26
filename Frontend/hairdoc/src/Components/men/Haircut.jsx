import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IdContext } from "../men/Contexts/Id_context";
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

function Haircut() {
  const [hairData, setHairData] = useState([]);
  const { id, setId } = useContext(IdContext);
  useEffect(() => {
  
    axios
      .get("http://localhost:8080/men/haircut/")
      //   .then(res=> console.log(res.data))
      .then((res) => setHairData(res.data));
  }, [id]);

  const handleClick = (e) => {
    setId({ ...id, hairId: e.target.id });
  };
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
      {hairData.length > 0
        ? hairData.map((item) => {
            return (
              <>
                <Card maxW="sm" key={item._id}>
                  <CardBody>
                    <Image
                      src={item.poster}
                      alt="Green double couch with wooden legs"
                      borderRadius="lg"
                     style={{width : '90%',height : '75%'}}
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
                      onClick={(e) => handleClick(e)}
                      id={item._id}
                      variant="solid"
                      colorScheme="blue"
                      style={{ width: "20vw" }}
                    >
                      Add to Cart
                    </Button>
                  </CardFooter>
                </Card>
              </>
            );
          })
        : null}
    </div>
  );
}

export default Haircut;
