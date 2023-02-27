
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


const MensHairCut = () => {
  const toast = useToast();
  const [formData, setFormData] = useState({
    poster: '',
    name: '',
    price: '',
    rating: '',
    hairLength:'',
    details:'',
    customerCount: ''
  });

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.hairLength && formData.details && formData.name && formData.price && formData.rating && formData.customerCount) {
    //   onSubmit(formData);
   
    try {
        let response = await fetch("https://sleepy-foal-waders.cyclic.app/men/haircut/create", {
          method: "POST",
          body: JSON.stringify(formData),
          headers: {
            "Content-type": "application/json"
          }
        });
    //   await response.json()
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
            hairLength:'',
            details:''
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
      <Text fontSize={'lg'}>Add mens hair cut service</Text>
      <form onSubmit={handleSubmit}>
        <FormControl id="image">
          <FormLabel>Poster Link</FormLabel>
          <Input type="url" name="poster" value={formData.poster} onChange={handleInputChange} />
        </FormControl>

        <FormControl id="name" mt={4}>
          <FormLabel>Name</FormLabel>
          <Input type="text" name="name" value={formData.name} onChange={handleInputChange} required />
        </FormControl>

        <FormControl id="hairlength" mt={4}>
          <FormLabel>HairLength</FormLabel>
          <Input type="text" name="hairLength" value={formData.hairLength} onChange={handleInputChange} required />
        </FormControl>

        <FormControl id="price" mt={4}>
          <FormLabel>Price</FormLabel>
          <Input type="number" name="price" value={formData.price} onChange={handleInputChange} required />
        </FormControl>


        <FormControl id="rating" mt={4}>
          <FormLabel>Rating</FormLabel>
          <Input type="number" name="rating" value={formData.rating} onChange={handleInputChange} required />
        </FormControl>

        <FormControl id="customerCount" mt={4}>
          <FormLabel>Customer Count</FormLabel>
          <Input type="number" name="customerCount" value={formData.customerCount} onChange={handleInputChange} required />
        </FormControl>

        <FormControl id="details" mt={4}>
          <FormLabel>Details</FormLabel>
          <Input type="text" name="details" value={formData.details} onChange={handleInputChange} required />
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

export default MensHairCut
