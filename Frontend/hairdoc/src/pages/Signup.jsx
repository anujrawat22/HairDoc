import LevelImg from "../images/Level.png";
import { Navigate, useNavigate } from "react-router-dom";


import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  InputGroup,
  HStack,
  InputRightElement,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Link,
  VStack,
  Image,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  Center,
  PinInput,
  PinInputField
} from "@chakra-ui/react";
import { useRef, useState } from "react";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";

export default function SignupCard() {
  const firstPinRef = useRef(null);
  const secondPinRef = useRef(null);
  const thirdPinRef = useRef(null);
  const fourthPinRef = useRef(null);
  const signupFirstName = useRef(null);
  const signupLastName = useRef(null);
  const signupEmail = useRef(null);
  const signupPassword = useRef(null);
  const signupMobile = useRef(null);
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const handleSignUp = async () => {
    let obj = {
      name: signupFirstName.current.value + " " + signupLastName.current.value,
      email: signupEmail.current.value,
      password: signupPassword.current.value,
      mobile: signupMobile.current.value
    };
    console.log(obj)
    if (
      obj.name == "" ||
      obj.email == "" ||
      obj.password == "" ||
      obj.mobile == ""
    ) {
      alert("Please fill all the details");
      return;
    }
    try {
      let response = await fetch("http://localhost:8080/signup", {
        method: "POST",
        body: JSON.stringify(obj),
        headers: {
          "Content-type": "application/json"
        }
      });
      console.log(await response.json());
      onOpen();
    } catch (error) {
      console.log(error);
    }
  };

  const handleOTP = async () => {
    let otp = Number(
      firstPinRef.current.value +
        secondPinRef.current.value +
        thirdPinRef.current.value +
        fourthPinRef.current.value
    );

    try {
      let response = await fetch("http://localhost:8080/verify", {
        method: "POST",
        body: JSON.stringify({ otp, email: signupEmail.current.value }),
        headers: {
          "Content-type": "application/json"
        }
      });
      console.log(await response.json());
      onClose();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <>
      <Flex
        minH={"100vh"}
        align={"center"}
        justify={"center"}
        bg={useColorModeValue("gray.50", "gray.800")}
      >
        <Stack
          spacing={8}
          mx={"auto"}
          py={12}
          px={6}
          backgroundImage="url('../images/bg.png')"
        >
          <Stack align={"center"}>
            <Heading fontSize={"4xl"} textAlign={"center"}>
              <Text fontSize={"5g"} color={"black.600"}>
                SignUp
              </Text>
            </Heading>
          </Stack>
          <Box
            rounded={"lg"}
            bg={useColorModeValue("white", "gray.700")}
            boxShadow={"lg"}
            p={8}
          >
            <HStack spacing={10}>
              <Image
                w="50%"
                alt={"Login Image"}
                objectFit={"logo"}
                src={LevelImg}
                rounded="lg"
                display={{ base: "none", md: "none", lg: "block" }}
                onClick={() => navigate("/")}
              />
              <VStack>
                <HStack>
                  <Box>
                    <FormControl id="firstName" isRequired>
                      <FormLabel>First Name</FormLabel>
                      <Input type="text" ref={signupFirstName} />
                    </FormControl>
                  </Box>
                  <Box>
                    <FormControl id="lastName">
                      <FormLabel>Last Name</FormLabel>
                      <Input type="text" ref={signupLastName} />
                    </FormControl>
                  </Box>
                </HStack>
                <FormControl id="email" isRequired>
                  <FormLabel>Email address</FormLabel>
                  <Input type="email" ref={signupEmail} />
                </FormControl>
                <FormControl id="mobile" isRequired>
                  <FormLabel>Mobile</FormLabel>
                  <Input type="number" ref={signupMobile} />
                </FormControl>
                <FormControl id="password" isRequired>
                  <FormLabel>Password</FormLabel>
                  <InputGroup>
                    <Input
                      type={showPassword ? "text" : "password"}
                      ref={signupPassword}
                    />
                    <InputRightElement h={"full"}>
                      <Button
                        variant={"ghost"}
                        onClick={() =>
                          setShowPassword((showPassword) => !showPassword)
                        }
                      >
                        {showPassword ? <ViewIcon /> : <ViewOffIcon />}
                      </Button>
                    </InputRightElement>
                  </InputGroup>
                </FormControl>
                <Stack spacing={10} pt={2}>
                  <Button
                    onClick={handleSignUp}
                    loadingText="Submitting"
                    size="lg"
                    bg={"#ebd3e1"}
                    color={"black"}
                    _hover={{
                      bg: "black",
                      color: "white"
                    }}
                  >
                    Sign up
                  </Button>
                </Stack>
                <Stack pt={6}>
                  <Text align={"center"}>
                    Already a user?{" "}
                    <Link
                      color={"black"}
                      background={"#ebd3e1"}
                      onClick={() => navigate("/login")}
                      p="5px"
                      _hover={{
                        bg: "black",
                        color: "white"
                      }}
                    >
                      Login
                    </Link>
                  </Text>
                </Stack>
              </VStack>
            </HStack>
          </Box>
        </Stack>
      </Flex>
      <Modal
        closeOnOverlayClick={false}
        isOpen={isOpen}
        onClose={onClose}
        size="sm"
      >
        <ModalOverlay />
        <ModalContent p="20px">
          <Flex
            minH={"fit-content"}
            align={"center"}
            justify={"center"}
            bg={useColorModeValue("gray.50", "gray.800")}
          >
            <Stack
              spacing={4}
              w={"full"}
              maxW={"sm"}
              bg={useColorModeValue("white", "gray.700")}
              rounded={"xl"}
              boxShadow={"lg"}
              p={6}
              my={10}
            >
              <Center>
                <Heading lineHeight={1.1} fontSize={{ base: "2xl", md: "3xl" }}>
                  Verify your Email
                </Heading>
              </Center>
              <Center
                fontSize={{ base: "sm", sm: "md" }}
                color={useColorModeValue("gray.800", "gray.400")}
              >
                We have sent code to your email
              </Center>
              <Center
                fontSize={{ base: "sm", sm: "md" }}
                fontWeight="bold"
                color={useColorModeValue("gray.800", "gray.400")}
              >
                username@mail.com
              </Center>
              <FormControl>
                <Center>
                  <HStack>
                    <PinInput>
                      <PinInputField ref={firstPinRef} />
                      <PinInputField ref={secondPinRef} />
                      <PinInputField ref={thirdPinRef} />
                      <PinInputField ref={fourthPinRef} />
                    </PinInput>
                  </HStack>
                </Center>
              </FormControl>
              <Stack spacing={6}>
                <Button
                  onClick={handleOTP}
                  bg={"#ebd3e1"}
                  color={"white"}
                  _hover={{
                    bg: "black"
                  }}
                >
                  Verify
                </Button>
              </Stack>
            </Stack>
          </Flex>
        </ModalContent>
      </Modal>
    </>
  );
}
