import Head from "next/head";
import { InfoContainer } from "@/containers";
import React from "react";
import { TestData } from "@/utils/testData";

const index = () => {
  return (
    <>
      <Head>
        <title>Info</title>
      </Head>
      <InfoContainer
        title={TestData.title}
        description={TestData.overview}
        poster_image={`https://image.tmdb.org/t/p/w780${TestData.poster_path}`}
        background_image={`https://image.tmdb.org/t/p/original${TestData.backdrop_path}`}
        release_date={TestData.release_date}
      />
    </>
  );
};

export default index;
