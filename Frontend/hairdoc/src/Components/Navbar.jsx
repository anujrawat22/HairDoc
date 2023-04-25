import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import logo from "../images/Level.png";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Text,
  Image,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon} from "@chakra-ui/icons";


import { AuthContext } from "../contex/auth";

const Links = ["Home", "Women", "Men", "Blogs"];

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const navigate = useNavigate();

  const { authState } = useContext(AuthContext);
  console.log(authState);

  return (
    <>
      <Box bg={useColorModeValue("#ebd3e1", "#ebd3e1")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"lg"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ lg: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={6} alignItems={"center"}>
            <Box>
              <Image
                w="10%"
                src={logo}
                alt={"Login Image"}
                objectFit={"logo"}
                rounded="lg"
                size={"sm"}
              />
            </Box>
            <HStack
              as={"nav"}
              spacing={3}
              display={{ base: "none", md: "none", lg: "block" }}
            >
              <Flex gap={6}>
                <Text
                  cursor={"pointer"}
                  color={"black"}
                  onClick={() => navigate("/")}
                >
                  Home
                </Text>
                <Text
                  cursor={"pointer"}
                  color={"black"}
                  onClick={() => navigate("/women")}
                >
                  Women
                </Text>
                <Text
                  cursor={"pointer"}
                  color={"black"}
                  onClick={() => navigate("/men")}
                >
                  Men
                </Text>
              </Flex>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            {authState.isauth  ? (
              <HStack>
                <Menu>
                  <MenuButton
                    as={Button}
                    rounded={"full"}
                    variant={"link"}
                    cursor={"pointer"}
                    minW={0}
                  >
                    <Avatar
                      size={"sm"}
                      src={
                        "https://cdn-icons-png.flaticon.com/512/1077/1077012.png"
                      }
                    />
                  </MenuButton>
                  <MenuList>
                    <MenuItem>Profile</MenuItem>
                    <MenuItem>My Bookings</MenuItem>
                    <MenuDivider />
                    <MenuItem onClick={() => authState.handleLogout()}>
                      Logout
                    </MenuItem>
                  </MenuList>
                </Menu>
              </HStack>
            ) : (
              <>
                <Button
                  variant={"solid"}
                  color={"black"}
                  size={"sm"}
                  mr={4}
                  onClick={() => navigate("/signup")}
                >
                  SignUp
                </Button>
                <Button
                  variant={"solid"}
                  color={"black"}
                  size={"sm"}
                  mr={4}
                  onClick={() => navigate("/login")}
                >
                  Login
                </Button>
              </>
            )}
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "block" }}>
            <Stack as={"nav"} spacing={4}>
              {Links.map((link) => (
                <Link key={link}>{link}</Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>

      <Box p={4}></Box>
    </>
  );
}
