import WomenNavbar from "../women/women_nav"
import { Box, Heading,Flex,Image,Text} from '@chakra-ui/react'
import React, { useState,useEffect } from 'react';

function WomenShow(){
    const [apidata,setApidata] = useState([])

    async function getdata(){
       
        try{
            const users = await fetch(`http://localhost:8080/women/HairSpa`)
            const res = await users.json()
            setApidata(res.data)
            
        }
        catch(err){
            return 
        }
        
    }

    // useEffect(()=>{
    //     getdata(apidata)
    // },[])


    return (
        <div>
            <WomenNavbar/>
            <Heading>
                    Technical
            </Heading>
                <Flex>
                        <Box>
                            {
                                apidata.map((e)=>{
                                    return(
                                       <div>

                                       </div>
                                    )
                                })
                            }
                        </Box>
                </Flex>
                    
        </div>
    )

}

export default WomenShow