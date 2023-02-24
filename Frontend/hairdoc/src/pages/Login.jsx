import LevelImg from "../images/Level.png";
import { useNavigate } from "react-router-dom";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  Checkbox,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Link,
  Stack,
  Image,
  InputGroup,
  InputRightElement,
  Text
} from "@chakra-ui/react";
import { useContext, useRef, useState } from "react";
import { AuthContext } from "../contex/auth";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();
  const { authState } = useContext(AuthContext);

  const loginEmail = useRef(null);
  const loginPassword = useRef(null);

  return (
    <Stack minH={"100vh"} direction={{ base: "column", md: "row" }}>
      <Flex p={8} flex={1} align={"center"} justify={"center"}>
        <Stack spacing={4} w={"full"} maxW={"md"}>
          <Heading fontSize={"2xl"}>LogIn</Heading>
          <FormControl id="email" isRequired>
            <FormLabel>Email address</FormLabel>
            <Input type="email" ref={loginEmail} />
          </FormControl>
          <FormControl id="password" isRequired>
            <FormLabel>Password</FormLabel>
            <InputGroup>
              <Input
                type={showPassword ? "text" : "password"}
                ref={loginPassword}
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
          <Stack spacing={6}>
            <Stack
              direction={{ base: "column", sm: "row" }}
              align={"start"}
              justify={"space-between"}
            >
              <Checkbox>Remember me</Checkbox>
              <Link color={"blue.500"}>Forgot password?</Link>
            </Stack>
            <Button
              bg={"#ebd3e1"}
              variant={"solid"}
              onClick={() =>
                authState.handleLogin(
                  loginEmail.current.value,
                  loginPassword.current.value
                )
              }
              loadingText="Submitting"
            >
              Log in
            </Button>
          </Stack>
          <Stack pt={6}>
            <Text align={"center"}>
              Don't have an account yet?{" "}
              <Link
                color={"black"}
                background={"#ebd3e1"}
                onClick={() => navigate("/signup")}
                p="5px"
              >
                SignUp
              </Link>
            </Text>
          </Stack>
        </Stack>
      </Flex>
      <Flex flex={1}>
        <Image
          alt={"Login Image"}
          objectFit={"logo"}
          src={LevelImg}
          onClick={() => navigate("/")}
        />
      </Flex>
    </Stack>
  );
}
