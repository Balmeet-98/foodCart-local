import {
  Box,
  Button,
  Flex,
  Heading,
  HStack,
  Link,
  Stack,
  useColorModeValue as mode,
} from "@chakra-ui/react";
import * as React from "react";
import { useState, useEffect } from "react";
import { CartOrderSummary } from "./CartOrderSummary";
import { StarIcon } from "@chakra-ui/icons";
export const Cart = ({ navigate }) => {
  const [quantity, setQuantity] = useState(1);
  const [cartData, setCartData] = useState([]);
  useEffect(() => {
    const data = JSON.parse(localStorage.getItem("cart"));
    if (data === null) {
      setCartData(cartData);
    } else {
      setCartData(data);
    }
  }, []);
  const addition = (a) => {
    console.log("add");
  };
  return (
    <Box
      maxW={{
        base: "3xl",
        lg: "7xl",
      }}
      mx="auto"
      px={{
        base: "4",
        md: "8",
        lg: "12",
      }}
      py={{
        base: "6",
        md: "8",
        lg: "12",
      }}
    >
      <Stack
        direction={{
          base: "column",
          lg: "row",
        }}
        align={{
          lg: "flex-start",
        }}
        spacing={{
          base: "8",
          md: "16",
        }}
      >
        <Stack
          spacing={{
            base: "8",
            md: "10",
          }}
          flex="2"
        >
          <Heading fontSize="2xl" fontWeight="extrabold">
            Shopping Cart
          </Heading>

          {cartData.length >= 1 ? (
            <Stack spacing="6">
              {cartData.map((items, id) => {
                return (
                  <div
                    key={id}
                    style={{ border: "1px solid", padding: "20px" }}
                  >
                    <span>
                      <img
                        src={items.image}
                        alt="image"
                        style={{ height: "50px" }}
                      />
                      <pre>
                        {items.title} <b>Price:{items.price}</b>
                      </pre>
                      <br />
                      <pre>
                        <Button
                          h="1.75rem"
                          size="md"
                          style={{ margin: "10px" }}
                          onClick={() => console.log("remove")}
                        >
                          -
                        </Button>
                        Quantity:{quantity}
                        <Button
                          h="1.75rem"
                          size="md"
                          style={{ margin: "10px" }}
                          onClick={() => addition(id)}
                        >
                          +
                        </Button>
                      </pre>
                    </span>
                  </div>
                );
              })}
            </Stack>
          ) : (
            <Stack spacing="6">
              <p>Cart is empty</p>
            </Stack>
          )}
        </Stack>

        <Flex direction="column" align="center" flex="1">
          <CartOrderSummary />
          <HStack mt="6" fontWeight="semibold">
            <p>or</p>
            <Link
              onClick={() => navigate("/dashboard/")}
              color={mode("blue.500", "blue.200")}
            >
              Continue shopping
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </Box>
  );
};
