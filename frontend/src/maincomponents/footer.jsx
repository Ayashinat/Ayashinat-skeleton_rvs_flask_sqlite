// src/components/Footer.jsx
import { Box, Text, useColorModeValue } from "@chakra-ui/react";

const Footer = () => {
  return (
    <Box as="footer" bg="green.500" color="white" p={4} width="100%">
      <Text textAlign="center">&copy; {new Date().getFullYear()} Mon Site. Tous droits réservés.</Text>
    </Box>
  );
};

export default Footer;
