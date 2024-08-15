import {
  Box,
  Flex,
  Heading,
  Input,
  Button,
  FormControl,
  FormLabel,
  Image,
} from "@chakra-ui/react";
import welcome from "../assets/ilustrations/welcome.svg";
import useAuth from "../auth/useAuth";
import { useState } from "react";

const Login = () => {
  const { singUp } = useAuth();

  const [formValues, setFormValues] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValues({
      ...formValues,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await singUp({
      email: "steverova0594@gmail.com",
      password: "Hello$1234",
    });
  };

  return (
    <Box style={{ backgroundColor: "#edf2f7" }}>
      <Flex minHeight="100vh" width="100%">
        {/* Columna Derecha */}
        <Flex
          flex={{ base: "1", sm: "1", md: "1" }}
          align="center"
          justify="center"
          p={8}
        >
          <Box
            className="bg-white sm:px-10 lg:px-20 py-12  rounded-[18px] shadow"
            width="full"
            maxWidth="md"
          >
            <Heading mb={6} textAlign="center">
              Login
            </Heading>
            <form onSubmit={handleSubmit}>
              <FormControl id="email" mb={4}>
                <FormLabel>Email</FormLabel>
                <Input
                  name="email"
                  
                  value="steverova0594@gmail.com"
                  onInput={handleChange}
                  variant="filled"
                  type="email"
                />
              </FormControl>
              <FormControl id="password" mb={6}>
                <FormLabel>Password</FormLabel>
                <Input
                  
                  name="password"
                  value="Hello$1234"
                  onInput={handleChange}
                  variant="filled"
                  type="password"
                />
              </FormControl>
              <Button type="submit" colorScheme="teal" width="full">
                Login
              </Button>
            </form>
          </Box>
        </Flex>
        {/* Columna Izquierda */}
        <Box
          flex="1"
          display={{ base: "none", md: "flex" }} // Ocultar en pantallas pequeñas
          alignItems="center" // Centrar verticalmente
          justifyContent="center" // Centrar horizontalmente
          bg="gray.100"
        >
          <Image
            src={welcome}
            alt="Login Image"
            objectFit="cover"
            height="20rem"
            width="auto"
          />
        </Box>
      </Flex>
    </Box>
  );
};

export default Login;
