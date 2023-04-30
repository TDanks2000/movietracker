import { Card } from "@/components";
import { utils } from "@/utils";
import { TestPopularMovies } from "@/utils/testData";
import React, { useRef } from "react";
import CardRow from "../../CardRow";
import { SectionContainer, SectionTitle } from "../styles";

const Popular = () => {
  return (
    <SectionContainer>
      <SectionTitle>Popular</SectionTitle>
      <CardRow data={TestPopularMovies.results} keyValue={`popular`} />
    </SectionContainer>
  );
};

export default Popular;
