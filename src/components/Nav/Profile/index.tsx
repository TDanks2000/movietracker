import React from "react";
import { Container, Wrapper } from "./styles";
import Image from "next/image";

import profilePicture from "../../../assets/imgs/pp.jpeg";

const NavProfile = () => {
  return (
    <Container>
      <Wrapper>
        <Image src={profilePicture} width={40} height={40} alt="Profile " />
      </Wrapper>
    </Container>
  );
};

export default NavProfile;
