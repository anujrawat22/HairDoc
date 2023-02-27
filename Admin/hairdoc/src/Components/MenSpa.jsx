import React, { useState } from 'react';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Text,
  useToast,
} from '@chakra-ui/react';


const MensSpa = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    customerCount: '',
    memberprice:'',
    nonmemberprice:''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.name && formData.memberprice && formData.rating && formData.customerCount && formData.nonmemberprice) {
    //   onSubmit(formData);
   
    try {
        let response = await fetch("https://sleepy-foal-waders.cyclic.app/men/spa/create", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json"
          }
        });
      // await response.json()
        toast({
            title: "Service added.",
            description: "Your new service has been added to the list.",
            status: "success",
            duration: 5000,
            isClosable: true,
          });

        setFormData({
            poster: '',
            name: '',
            price: '',
            rating: '',
            customerCount: '',
            facetype: '',
          });

      } catch (error) {
        toast({
            title: "Missing fields.",
            description: "Please fill in all required fields.",
            status: "warning",
            duration: 5000,
            isClosable: true,
          });
        console.log(error);
      }
    };
  };

  return (
    <Box maxW="lg" m={'auto'} borderWidth="1px" borderRadius="lg" overflow="hidden" p={3}>
      <Text fontSize={'lg'}>Add mens Spa service</Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="image">
          <FormLabel>Poster Link</FormLabel>
          <Input type="url" name="poster" value={formData.poster} onChange={handleInputChange} />
        </FormControl>

        <FormControl id="name" mt={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </FormControl>

        <FormControl id="memberprice" mt={4}>
          <FormLabel>Member price</FormLabel>
          <Input type="number" name="memberprice" value={formData.memberprice} onChange={handleInputChange} required />
        </FormControl>


        <FormControl id="rating" mt={4}>
          <FormLabel>Rating</FormLabel>
          <Input type="number" name="rating" value={formData.rating} onChange={handleInputChange} required />
        </FormControl>

        <FormControl id="customerCount" mt={4}>
          <FormLabel>Customer Count</FormLabel>
          <Input type="number" name="customerCount" value={formData.customerCount} onChange={handleInputChange} required />
        </FormControl>

        <FormControl id="nonmemberprice" mt={4}>
          <FormLabel>Non Member Price</FormLabel>
          <Input type="text" name="nonmemberprice" value={formData.nonmemberprice} onChange={handleInputChange} required />
           
        </FormControl>

    <Flex justify="space-between" align="center" mt={5}>
      <Button colorScheme="blue" type="submit">
        Add Service
      </Button>
    </Flex>
  </form>
</Box>
  )
}

export default MensSpa
