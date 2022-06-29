import React, { useEffect, useState } from "react";

import { Box, Badge } from "@chakra-ui/react";
import { StarIcon } from "@chakra-ui/icons";

export const Home = ({ data, filter, addCart }) => {
  return (
    <>
      {filter.length < 1
        ? data.map((items) => {
            return (
              <Box
                maxW="lg"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={items.id}
              >
                <img src={items.image} />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {items.category} &bull; {items.description}
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {items.title}
                  </Box>

                  <Box>
                    ${items.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                      /-
                    </Box>
                  </Box>

                  <Box display="flex" mt="2" alignItems="center">
                    {/* {Array(5)
                      .fill("")
                      .map((_, i) => (
                        // <StarIcon
                        //   key={i}
                        //   color={
                        //     i < items.rating.rate ? "teal.500" : "gray.300"
                        //   }
                        // />
                      ))} */}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {/* {items.rating.count} reviews{" "} */}
                      <button
                        h="1.75rem"
                        size="sm"
                        onClick={() => addCart(items._id)}
                      >
                        Add To Cart
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })
        : filter.map((items) => {
            return (
              <Box
                maxW="sm"
                borderWidth="1px"
                borderRadius="lg"
                overflow="hidden"
                key={items.id}
              >
                <img src={items.image} />

                <Box p="6">
                  <Box display="flex" alignItems="baseline">
                    <Badge borderRadius="full" px="2" colorScheme="teal">
                      New
                    </Badge>
                    <Box
                      color="gray.500"
                      fontWeight="semibold"
                      letterSpacing="wide"
                      fontSize="xs"
                      textTransform="uppercase"
                      ml="2"
                    >
                      {items.category} &bull; {items.description}
                    </Box>
                  </Box>

                  <Box
                    mt="1"
                    fontWeight="semibold"
                    as="h4"
                    lineHeight="tight"
                    noOfLines={1}
                  >
                    {items.title}
                  </Box>

                  <Box>
                    ${items.price}
                    <Box as="span" color="gray.600" fontSize="sm">
                      /-
                    </Box>
                  </Box>

                  <Box display="flex" mt="2" alignItems="center">
                    {Array(5)
                      .fill("")
                      .map((_, i) => (
                        <StarIcon
                          key={i}
                          color={
                            i < items.rating.rate ? "teal.500" : "gray.300"
                          }
                        />
                      ))}
                    <Box as="span" ml="2" color="gray.600" fontSize="sm">
                      {items.rating.count} reviews{" "}
                      <button
                        h="1.75rem"
                        size="sm"
                        onClick={() => addCart(items.id)}
                      >
                        Add To Cart
                      </button>
                    </Box>
                  </Box>
                </Box>
              </Box>
            );
          })}
    </>
  );
};
