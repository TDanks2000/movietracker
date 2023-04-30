import React from "react";
import { CardProps } from "./Card.types";
import {
  BottomContainer,
  CardContainer,
  ImageContainer,
  Rating,
  RatingContainer,
  RatingIcon,
  ReleaseDate,
  Title,
  TopContainer,
} from "./styles";

const Card = ({
  title,
  description,
  id,
  backdrop_path,
  genres,
  poster_path,
  status,
  rating,
  release_date,
}: CardProps) => {
  return (
    <CardContainer
      href={`/info/${id}`}
      // background={`https://image.tmdb.org/t/p/original${backdrop_path}`}
    >
      <TopContainer>
        <ImageContainer
          src={`https://image.tmdb.org/t/p/w780${poster_path}`}
          alt={title}
          height={400}
          width={400}
        />
      </TopContainer>
      <BottomContainer>
        <Title>{title}</Title>
        <ReleaseDate>{release_date ?? "??"}</ReleaseDate>
        <RatingContainer>
          {rating ? <RatingIcon /> : null}
          <Rating>{rating?.toString()}</Rating>
        </RatingContainer>
      </BottomContainer>
    </CardContainer>
  );
};

export default Card;
