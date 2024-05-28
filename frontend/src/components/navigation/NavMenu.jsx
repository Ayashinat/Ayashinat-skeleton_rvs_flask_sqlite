// src/components/navigation/NavMenu.jsx
import { HStack } from "@chakra-ui/react";
import MenuLink from "./MenuLink";

const NavMenu = () => {
  return (
    <HStack spacing={4}>
      <MenuLink to="/">Accueil</MenuLink>
      <MenuLink to="/UtilisateursPage">Membres</MenuLink>
      <MenuLink to="/about">À Propos</MenuLink>
      <MenuLink to="/contact">Contact</MenuLink>
    </HStack>
  );
};

export default NavMenu;
