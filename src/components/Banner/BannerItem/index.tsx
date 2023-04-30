import React from "react";
import {
  AddToListButton,
  BackgroundContainer,
  BannerItemContainer,
  BannerItemWrapper,
  ButtonsContainer,
  MetaInfoContainer,
  MetaInfoItemDescription,
  Title,
  TrailerButton,
} from "./styles";
import { TestData } from "@/utils/testData";
import Image from "next/image";

const BannerItem = () => {
  return (
    <BannerItemContainer>
      <BackgroundContainer>
        <Image
          src={`https://image.tmdb.org/t/p/original${TestData.backdrop_path}`}
          alt={TestData.title}
          width={1000}
          height={1000}
        />
      </BackgroundContainer>

      <BannerItemWrapper>
        <Title>{TestData.title}</Title>

        <MetaInfoContainer>
          <p>test</p>
        </MetaInfoContainer>

        <MetaInfoItemDescription>{TestData.overview}</MetaInfoItemDescription>

        <ButtonsContainer>
          <AddToListButton>Add to list</AddToListButton>
          <TrailerButton>Trailer</TrailerButton>
        </ButtonsContainer>
      </BannerItemWrapper>
    </BannerItemContainer>
  );
};

export default BannerItem;
