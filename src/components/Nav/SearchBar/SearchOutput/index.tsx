import React from "react";
import { OutputContainer } from "./styles";

type Props = {
  results?: any;
};

const SearchOutput = ({ results }: Props) => {
  if (!results) return null;

  return <OutputContainer></OutputContainer>;
};

export default SearchOutput;
