import React from "react";
import {
  BannerContainer,
  BannerWrapper,
  PaginationContainer,
  PaginationMarker,
} from "./styles";
import BannerItem from "./BannerItem";

const Banner = () => {
  return (
    <BannerContainer>
      <BannerWrapper>
        <BannerItem />
        <PaginationContainer>
          <PaginationMarker className="active" />
          <PaginationMarker />
          <PaginationMarker />
        </PaginationContainer>
      </BannerWrapper>
    </BannerContainer>
  );
};

export default Banner;
