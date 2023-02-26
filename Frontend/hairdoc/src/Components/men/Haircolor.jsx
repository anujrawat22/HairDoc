import React, { useEffect, useState, useContext } from "react";
import axios from "axios";
import { IdContext } from '../men/Contexts/Id_context'
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


function Haircolor() {
  const [haircolorData, setHairColorData] = useState([]);
  const [colorId,setcolorId]= useState({
    id:''
  })
  const  { id, setId } = useContext(IdContext)
  useEffect(() => {
    axios
      .get("http://localhost:8080/men/haircolor/")
      //   .then(res=> console.log(res.data))
      .then((res) => setHairColorData(res.data));
      // console.log(id)
  }, [id]);

  const handleClick = (e)=>{
    setId( { ...id , colorId: e.target.id})
    
  }
  return (
    <div className="main"  style={{display:'flex',gap:'2rem',flexWrap:'wrap',flexBasis:"200px",margin:'2rem',justifyContent:'center' }} >
      {haircolorData.length > 0
        ? haircolorData.map((item) => {
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

export default Haircolor;
