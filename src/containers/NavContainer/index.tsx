import React from "react";
import { Container } from "./styles";
import { NavLogo, NavProfile, SearchBar } from "@/components";

const NavContainer = () => {
  return (
    <Container>
      <NavLogo />
      <SearchBar />
      <NavProfile />
    </Container>
  );
};

export default NavContainer;
