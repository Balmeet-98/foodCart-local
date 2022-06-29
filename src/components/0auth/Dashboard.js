import { GrLogout } from "react-icons/gr";
import { useRef, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { About } from "./About";
import { Home } from "./Home";
import { Contact } from "./Contact";
import axios from "axios";
import {
  Box,
  Flex,
  HStack,
  Menu,
  useDisclosure,
  useColorModeValue,
  Drawer,
  DrawerBody,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  Button,
  Input,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";
import { HamburgerIcon, AddIcon } from "@chakra-ui/icons";
import logo from "./1723673.png";
import { Routes, Route } from "react-router-dom";
import { NotFound } from "./NotFound";
import { Cart } from "./Cart";
export function Dashboard() {
  const [data, setData] = useState([]);
  const [input, setInput] = useState("");
  const [filter, setFilter] = useState([]);
  useEffect(() => {
    try {
      axios
        .get("https://food-app-hai.herokuapp.com/api/merchant/getAllProducts")
        .then((result) => {
          setData(result.data.data.products);
          console.log(result.data.data.products);
        });
    } catch (e) {
      console.log(e);
    }
  }, []);
  useEffect(() => {
    searched();
  }, [input]);
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();
  const navigate = useNavigate();
  const logout = () => {
    localStorage.removeItem("token");
    navigate("/");
  };
  const handleChange = (e) => {
    setInput(e.target.value.toLowerCase());
  };
  const searched = () => {
    if (input.length >= 1) {
      setFilter(
        data.filter((items) => {
          return (
            items.title.toLowerCase().includes(input.toLowerCase()) ||
            items.category.toLowerCase().includes(input) ||
            items.title.toLowerCase().startsWith(input) ||
            items.category.toLowerCase().startsWith(input)
          );
        })
      );
    }
  };
  const addCart = (a) => {
    let arr = [];
    let filtered = data.find((items) => {
      return items._id === a;
    });
    let oldData = JSON.parse(localStorage.getItem("cart"));
    if (oldData === null) {
      arr.push(filtered);
      localStorage.setItem("cart", JSON.stringify(arr));
    } else {
      oldData.push(filtered);
      localStorage.setItem("cart", JSON.stringify(oldData));
    }
    alert("item is added to the cart");
  };
  const openCart = () => {
    navigate("/dashboard/cart");
  };
  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={8} alignItems={"center"}>
            <Button ref={btnRef} colorScheme="teal" onClick={onOpen}>
              <HamburgerIcon />
            </Button>
            <Box>
              <img src={logo} className="App-logo" alt="logo" width={80} />
            </Box>

            <Box>
              <InputGroup size="md">
                <Input
                  pr="4.5rem"
                  placeholder="Search"
                  onChange={handleChange}
                />
                <InputRightElement width="4.5rem">
                  <Button h="1.75rem" size="sm" onClick={searched}>
                    Search
                  </Button>
                </InputRightElement>
              </InputGroup>
            </Box>
          </HStack>
          <Button size="md" onClick={openCart}>
            <AddIcon />
          </Button>
          <Flex alignItems={"center"}>
            <Menu>
              <button onClick={logout}>
                <GrLogout />
              </button>
            </Menu>
          </Flex>
        </Flex>
      </Box>
      <Box p={4}>
        <Routes>
          <Route exact path="/about" element={<About />} />
          <Route
            exact
            path="/"
            element={<Home data={data} filter={filter} addCart={addCart} />}
          />
          <Route exact path="/contact" element={<Contact />} />
          <Route exact path="/notfound" element={<NotFound />} />
          <Route exact path="/cart" element={<Cart navigate={navigate} />} />
        </Routes>
      </Box>

      <Drawer
        isOpen={isOpen}
        placement="left"
        onClose={onClose}
        finalFocusRef={btnRef}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Welcome</DrawerHeader>

          <DrawerBody>
            <button onClick={() => navigate("/dashboard/")}>Products</button>
            <br />
            <button onClick={() => navigate("/dashboard/about")}>About</button>
            <br />
            <button onClick={() => navigate("/dashboard/contact")}>
              Contact
            </button>
            <br />
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}
