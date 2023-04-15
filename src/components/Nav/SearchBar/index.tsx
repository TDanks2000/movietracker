import React, { useState } from "react";
import SearchInput from "./SearchInput";
import { Container } from "./styles";
import SearchOutput from "./SearchOutput";

const SearchBar = () => {
  const onsSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const input: HTMLInputElement = e.currentTarget.querySelector(
      "input"
    ) as HTMLInputElement;
    const value: string = input.value.trim();

    if (!value.length || value.length <= 2) return;

    console.log(input.value);
  };

  return (
    <Container>
      <form onSubmit={onsSubmit}>
        <SearchInput />
      </form>

      <SearchOutput />
    </Container>
  );
};

export default SearchBar;
