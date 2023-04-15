import React from "react";
import { Container, Input, Button, ButtonIcon } from "./styles";

const SearchInput = () => {
  return (
    <Container>
      <Input placeholder="Search..." />
      <Button>
        <ButtonIcon />
      </Button>
    </Container>
  );
};

export default SearchInput;
