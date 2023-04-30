import { Info } from "@/components";
import React from "react";

interface Props {
  title: string;
  poster_image: string;
  background_image: string;
  description: string;
  release_date?: string;
}

const InfoContainer = (props: Props) => {
  return (
    <div>
      <Info.TopInfo {...props} />
    </div>
  );
};

export default InfoContainer;
