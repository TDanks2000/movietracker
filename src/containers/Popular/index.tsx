import { Card } from "@/components";
import { SectionContainer } from "@/styles/shared";
import { utils } from "@/utils";
import { TestPopularMovies } from "@/utils/testData";
import React, { useRef } from "react";
import CardRow from "../CardRow";

const Popular = () => {
  return (
    <div>
      <p>Popular</p>
      <CardRow data={TestPopularMovies.results} keyValue={`popular`} />
    </div>
  );
};

export default Popular;
