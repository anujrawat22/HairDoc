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


function SpaandTreatment() {
  const [spaData, setspaData] = useState([]);
  const [spaId,setspaId]= useState({
    id:''
  })
  const  { id, setId } = useContext(IdContext)
  useEffect(() => {
    axios
      .get("http://localhost:8080/men/spa/")
      //   .then(res=> console.log(res.data))
      .then((res) => setspaData(res.data));
      
  }, [id]);

  const handleClick = (e)=>{
    setId( { ...id , spaId: e.target.id})
    
  }
  return (
    <div className="main"  style={{display:'flex',gap:'2rem',flexWrap:'wrap',flexBasis:"200px",margin:'2rem',justifyContent:'center' }} >
      {spaData.length > 0
        ? spaData.map((item) => {
            return (
              <>
               





               <Card maxW="sm" key={item._id}>
                  <CardBody>
                    
                    <Stack mt="6" spacing="3">
                      <Heading size="md">{item.name}</Heading>
                      <Text fontSize="2xl">Member Price : {item.memberprice}</Text>
                      <Text fontSize="2xl">Non Member Price : {item.nonmemberprice}</Text>
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

export default SpaandTreatment;
