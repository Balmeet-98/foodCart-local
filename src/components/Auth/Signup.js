import React, { useState } from "react";
import {
  FormControl,
  FormLabel,
  Input,
  Button,
  Stack,
  Container,Circle,
} from "@chakra-ui/react";
export const Signup = () => {
  const [data, setData] = useState({});
  const arr = [];

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
  };

  const handleChange = (e) => {
    setData({
      ...data,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      <Container>
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
        <Stack direction="row" spacing={4} align="center">
          <Button colorScheme="teal" variant="outline" onClick={submit}>
            Button
          </Button>
        </Stack>
      </Container>
    </>
  );
};
