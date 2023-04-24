import { Splide, SplideSlide } from "@splidejs/react-splide";
import React from "react";
import { Card } from "../../components";
import { CardProps } from "@/components/Card/Card.types";
import { utils } from "@/utils";

const CardRow = ({ data, keyValue }: any) => {
  return (
    <Splide
      options={{
        type: "loop",
        perPage: 6,
        perMove: 1,
        arrows: false,
        pagination: false,
        gap: "1.5rem",
        autoWidth: true,
        breakpoints: {
          1380: {
            perPage: 5,
          },
          1044: {
            perPage: 4,
          },
          890: {
            perPage: 3,
          },
          640: {
            perPage: 2,
          },
        },
      }}
    >
      {data.map((media: any) => {
        const correctProps = utils.correctCardProps(media);

        return (
          <SplideSlide>
            <Card
              key={`slide-${keyValue}-${correctProps.id}`}
              {...correctProps}
            />
          </SplideSlide>
        );
      })}
    </Splide>
  );
};

export default CardRow;
