import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function SignupCard() {
  const [data, setData] = useState({});
  const arr = [];
  const navigate = useNavigate();

  const updateLocal = () => {
    let oldData = JSON.parse(localStorage.getItem("arr"));
    if (oldData === null) {
      arr.push(data);
      localStorage.setItem("arr", JSON.stringify(arr));
    } else {
      oldData.push(data);
      localStorage.setItem("arr", JSON.stringify(oldData));
    }
  };

  const submit = () => {
    setData(data);
    updateLocal();
    navigate("/");
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"} textAlign={"center"}>
            Sign up
          </Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            to enjoy all of our cool features ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl>
              <FormLabel htmlFor="name">Enter your Name:</FormLabel>
              <Input
                id="name"
                type="name"
                placeholder="Name"
                name="name"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="username">Enter Your Username</FormLabel>
              <Input
                id="username"
                type="username"
                placeholder="username"
                name="username"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="email">Enter Your Email</FormLabel>
              <Input
                id="email"
                type="email"
                placeholder="abc@example.com"
                name="email"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="password">Enter Your password</FormLabel>
              <Input
                id="password"
                type="password"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </FormControl>
            <FormControl>
              <FormLabel htmlFor="number">Enter Your Mobile No.</FormLabel>
              <Input
                id="number"
                type="number"
                placeholder="9696*******"
                name="number"
                onChange={handleChange}
              />
            </FormControl>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                onClick={submit}
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
              >
                Sign up
              </Button>
            </Stack>
            <Stack pt={6}>
              <Text align={"center"}>
                Already a user?{" "}
                <Link to="/" color={"blue.400"}>
                  Login
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
}
