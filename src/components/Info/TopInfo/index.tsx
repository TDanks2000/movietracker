import React from "react";
import {
  BackgroundImage,
  Container,
  Description,
  DescriptionContainer,
  DetailsContainer,
  EnglishTitle,
  Fade,
  Genre,
  Genres,
  MainInfoContainer,
  MainInfoWrapper,
  MetaInfoContainer,
  MetaInfoWrapper,
  PosterContainer,
  PosterImage,
  Rating,
  RatingContainer,
  RatingIcon,
  ReleaseYear,
  SectionTitle,
  TitleContainer,
  Wrapper,
} from "./styles";

interface Props {
  title: string;
  description: string;
  poster_image: string;
  background_image: string;
  release_date?: string;
}

const TopInfo = ({
  title,
  description,
  poster_image,
  background_image,
  release_date,
}: Props) => {
  const releaseDate = new Date(release_date as string);

  const releaseYear = releaseDate.getFullYear();

  return (
    <Container>
      <BackgroundImage
        src={background_image}
        alt={`${title} background image`}
        width={1000}
        height={1000}
      />
      <Fade />
      <Wrapper>
        <TitleContainer>
          <EnglishTitle>{title}</EnglishTitle>
          {releaseYear ? <ReleaseYear>({releaseYear})</ReleaseYear> : null}
        </TitleContainer>

        <MainInfoContainer>
          <PosterContainer>
            <PosterImage
              src={poster_image}
              alt={`${title} poster`}
              width={500}
              height={500}
            />
          </PosterContainer>
          <MainInfoWrapper>
            <DetailsContainer>
              <SectionTitle>Details:</SectionTitle>
              <MetaInfoContainer>
                <MetaInfoWrapper>
                  <p>Director:</p>
                  <span>Brian De Palma</span>
                </MetaInfoWrapper>
                <MetaInfoWrapper>
                  <p>Writer:</p>
                  <span>Brian De Palma</span>
                </MetaInfoWrapper>
                <MetaInfoWrapper>
                  <p>Country:</p>
                  <span>Cuba</span>
                </MetaInfoWrapper>
                <MetaInfoWrapper>
                  <p>Language:</p>
                  <span>English</span>
                </MetaInfoWrapper>
              </MetaInfoContainer>
            </DetailsContainer>
            <DescriptionContainer>
              <SectionTitle>Description:</SectionTitle>
              <Description>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
                sunt quibusdam laudantium quidem molestias earum sequi dolorem
                nulla minus fugiat ad iure, recusandae corrupti quos a dolorum
                facere vitae eos! Lorem ipsum dolor, sit amet consectetur
                adipisicing elit. Sed voluptate aliquam quibusdam, laudantium
                dolor doloribus sequi sapiente iure minus impedit ducimus
                corporis doloremque, blanditiis recusandae id dolore!
                Cupiditate, corrupti maxime. Lorem ipsum dolor sit amet
                consectetur, adipisicing elit. Nemo sunt quibusdam laudantium
                quidem molestias earum sequi dolorem nulla minus fugiat ad iure,
                recusandae corrupti quos a dolorum facere vitae eos! Lorem ipsum
                dolor, sit amet consectetur adipisicing elit. Sed voluptate
                aliquam quibusdam, laudantium dolor doloribus sequi sapiente
                iure minus impedit ducimus corporis doloremque, blanditiis
                recusandae id dolore! Cupiditate, corrupti maxime. Lorem ipsum
                dolor sit amet consectetur, adipisicing elit. Nemo sunt
                quibusdam laudantium quidem molestias earum sequi dolorem nulla
                minus fugiat ad iure, recusandae corrupti quos a dolorum facere
                vitae eos! Lorem ipsum dolor, sit amet consectetur adipisicing
                elit. Sed voluptate aliquam quibusdam, laudantium dolor
                doloribus sequi sapiente iure minus impedit ducimus corporis
                doloremque, blanditiis recusandae id dolore! Cupiditate,
                corrupti maxime.
              </Description>
            </DescriptionContainer>
          </MainInfoWrapper>
        </MainInfoContainer>
      </Wrapper>
    </Container>
  );
};

export default TopInfo;
