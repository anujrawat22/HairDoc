import WomenNavbar from "../women/women_nav"
import { Box, Heading,Flex,Image,Text,Grid, Button} from '@chakra-ui/react'
import React, { useState,useEffect } from 'react';
import axios from "axios";
function WomenShow(){
    const [cutData,setcutData] = useState([])

    const cutdata = async () => {
        let response = await axios.get(
          "https://hairdocbackend.onrender.com/women/HairCut"
        );
        setcutData(response.data);
      };
    

      useEffect(() => {
        cutdata();
      }, []);

    const [colorData,setcolorData] = useState([])

    const colordata = async () => {
        let response = await axios.get(
          "https://hairdocbackend.onrender.com/women/HairColor"
        );
        setcolorData(response.data);
      };
    

      useEffect(() => {
        colordata();
      }, []);

    const [spaData,setspaData] = useState([])

    const spadata = async () => {
        let response = await axios.get(
          "https://hairdocbackend.onrender.com/women/HairSpa"
        );
        setspaData(response.data);
      };
    

      useEffect(() => {
        spadata();
      }, []);

      const [treatData,settreatData] = useState([])

      const treatdata = async () => {
          let response = await axios.get(
            "https://hairdocbackend.onrender.com/women/HairTreatment"
          );
          settreatData(response.data);
        };
      
  
        useEffect(() => {
            treatdata();
        }, []);

        const [bestData,setbestData] = useState([])

        const bestdata = async () => {
            let response = await axios.get(
              "https://hairdocbackend.onrender.com/women/HairBest"
            );
            setbestData(response.data);
          };
        
    
          useEffect(() => {
            bestdata();
          }, []);


    return (
        <Box marginTop="20px">
        <WomenNavbar/>

        {/* cut */}

        <Heading id="cut">HairCut & Style</Heading>
        <Grid templateColumns='repeat(2, 1fr)'>
        {cutData?.map((e) => (

          <Flex  key={e._id} bg="white" padding="10px" marginTop="20px" marginLeft="10px">
            <Box padding="10px" width="100%" border="1px solid black" >
              <Text fontWeight="bold" fontSize="20px">
                {e["name"]}
              </Text>
              <Flex>
                <Box><Image src={e["poster"]} boxSize="85px"/></Box>
                <Box>
                    <Text>{"⏱"+e.time}</Text>
                    <Text>{"⭐️"+e.rating+"("+e.customerCount+")"}</Text>
                    <Text>{"💸"+e.price}</Text>
                </Box>
               
              </Flex>
              <Box>
                    <Text>{"➡️"+e.details[0]}</Text>
                    <Text>{"➡️"+e.details[1]}</Text>
                </Box>
                <Button bg="#ebd3e1" >Add</Button>
            </Box>
            
          </Flex>
        ))}
        </Grid>

        {/* color */}

        <Heading id="color">HairColor</Heading>
        <Grid templateColumns='repeat(2, 1fr)'>
        {colorData?.map((e) => (

          <Flex  key={e._id} bg="white" padding="10px" marginTop="20px" marginLeft="10px">
            <Box padding="10px" width="100%" border="1px solid black" >
              <Text fontWeight="bold" fontSize="20px">
                {e["name"]}
              </Text>
              <Flex>
                <Box><Image src={e["poster"]} boxSize="85px"/></Box>
                <Box>
                    <Text>{"⏱"+e.time}</Text>
                    <Text>{"⭐️"+e.rating+"("+e.customerCount+")"}</Text>
                    <Text>{"💸"+e.price}</Text>
                </Box>
               
              </Flex>
              <Box>
                    <Text>{"➡️"+e.details[0]}</Text>
                    <Text>{"➡️"+e.details[1]}</Text>
                </Box>
                <Button  bg="#ebd3e1">Add</Button>
            </Box>
            
          </Flex>
        ))}
        </Grid>

            {/* spa */}
        <Heading id="spa">HairSpa</Heading>
        <Grid templateColumns='repeat(2, 1fr)'>
        {spaData?.map((e) => (

          <Flex  key={e._id} bg="white" padding="10px" marginTop="20px" marginLeft="10px">
            <Box padding="10px" width="100%" border="1px solid black" >
              <Text fontWeight="bold" fontSize="20px">
                {e["name"]}
              </Text>
              <Flex>
                <Box><Image src={e["poster"]} boxSize="85px"/></Box>
                <Box>
                    <Text>{"⏱"+e.time}</Text>
                    <Text>{"⭐️"+e.rating+"("+e.customerCount+")"}</Text>
                    <Text>{"💸"+e.price}</Text>
                </Box>
               
              </Flex>
              <Box>
                    <Text>{"➡️"+e.details[0]}</Text>
                    <Text>{"➡️"+e.details[1]}</Text>
                </Box>
                <Button  bg="#ebd3e1">Add</Button>
            </Box>
            
          </Flex>
        ))}
        </Grid>

            {/* treatment */}
        <Heading id="treat">Hair Treatment</Heading>
        <Grid templateColumns='repeat(2, 1fr)'>
        {treatData?.map((e) => (

          <Flex  key={e._id} bg="white" padding="10px" marginTop="20px" marginLeft="10px">
            <Box padding="10px" width="100%" border="1px solid black" >
              <Text fontWeight="bold" fontSize="20px">
                {e["name"]}
              </Text>
              <Flex>
                <Box><Image src={e["poster"]} boxSize="85px"/></Box>
                <Box>
                    <Text>{"⏱"+e.time}</Text>
                    <Text>{"⭐️"+e.rating+"("+e.customerCount+")"}</Text>
                    <Text>{"💸"+e.price}</Text>
                </Box>
               
              </Flex>
              <Box>
                    <Text>{"➡️"+e.details[0]}</Text>
                    <Text>{"➡️"+e.details[1]}</Text>
                </Box>
                <Button  bg="#ebd3e1">Add</Button>
            </Box>
            
          </Flex>
        ))}
        </Grid>

            {/* Bestsaller */}
        <Heading id="best">Bestsaller</Heading>
        <Grid templateColumns='repeat(2, 1fr)'>
        {bestData?.map((e) => (

          <Flex  key={e._id} bg="white" padding="10px" marginTop="20px" marginLeft="10px">
            <Box padding="10px" width="100%" border="1px solid black" >
              <Text fontWeight="bold" fontSize="20px">
                {e["name"]}
              </Text>
              <Flex>
                <Box><Image src={e["poster"]} boxSize="85px"/></Box>
                <Box>
                    <Text>{"⏱"+e.time}</Text>
                    <Text>{"⭐️"+e.rating+"("+e.customerCount+")"}</Text>
                    <Text>{"💸"+e.price}</Text>
                </Box>
               
              </Flex>
              <Box>
                    <Text>{"➡️"+e.details[0]}</Text>
                    <Text>{"➡️"+e.details[1]}</Text>
                </Box>
                <Button  bg="#ebd3e1">Add</Button>
            </Box>
            
          </Flex>
        ))}
        </Grid>
        
       
      </Box>
    )

}

export default WomenShow