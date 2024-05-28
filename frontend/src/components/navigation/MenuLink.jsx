// src/components/navigation/MenuLink.jsx
import { Link as RouterLink } from "react-router-dom";
import { Link } from "@chakra-ui/react";

const MenuLink = ({ to, children }) => {
  return (
    <Link
      as={RouterLink}
      to={to}
      color="white"
      px={3}
      py={2}
      borderRadius="md"
      _hover={{ textDecoration: "none", bg: "orange.600", transform: "scale(1.05)" }}
      transition="all 0.2s ease-in-out"
    >
      {children}
    </Link>
  );
};

export default MenuLink;
