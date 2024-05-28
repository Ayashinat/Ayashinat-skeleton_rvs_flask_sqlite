// src/components/navigation/Header.jsx
import { Box, Heading, HStack } from "@chakra-ui/react";
import NavMenu from "../components/navigation/NavMenu";


const Header = () => {
  return (
    <Box as="header" bg="green.500" color="white" p={4} width="100%">
      <HStack justifyContent="space-between" alignItems="center">
        <Heading as="h1">Mon Site</Heading>
        <NavMenu />
      </HStack>
    </Box>
  );
};

export default Header;
