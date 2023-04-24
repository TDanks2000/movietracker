import { CardProps } from "./../components/Card/Card.types";

const correctCardProps = (props: any) => {
  const {
    overview,
    title,
    name,
    id,
    poster_path,
    backdrop_path,
    vote_average,
  } = props;

  const cardProps: CardProps = {
    title: title ?? name ?? "",
    id: id,
    description: overview ?? "",
    poster_path: poster_path ?? "",
    backdrop_path: backdrop_path ?? "",
    rating: vote_average?.toFixed(1) ?? "??",
  };

  return cardProps;
};

export { correctCardProps };
