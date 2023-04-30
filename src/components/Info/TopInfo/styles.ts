import Image from "next/image";
import { rgba } from "polished";
import { FaStar } from "react-icons/fa";
import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  display: grid;
  z-index: 0;
`;

export const BackgroundImage = styled(Image)`
  grid-area: 1/1/1/1;
  object-fit: cover;
  object-position: center;
  height: 500px;
  width: calc(100% - 8px);
`;

export const Fade = styled.div`
  grid-area: 1/1/1/1;

  background: ${({ theme }) => `
  linear-gradient(0deg, ${theme.base.bg}, rgba(23,24,28,.6))`};
  height: 500px;
  width: calc(100% - 8px);
`;

export const Wrapper = styled.div`
  grid-area: 1/1/1/1;

  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 1rem;

  padding: 5rem 5rem 0;
  z-index: 2;
`;

export const Logo = styled(Image)`
  height: 150px;
  padding-bottom: 20px;
  object-fit: contain;
`;

export const PosterContainer = styled.div`
  width: 250px;
  height: 400px;
  flex-grow: 0;
  flex-shrink: 0;
`;

export const PosterImage = styled(Image)`
  width: 100%;
  height: 100%;
  border-radius: 8px;
  overflow: hidden;
  object-fit: cover;
  object-position: center;
`;

export const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 1rem;
  width: 100%;

  border-bottom: 1px solid ${({ theme }) => rgba(theme.text.offWhite, 0.4)};
  padding-bottom: 1rem;
  margin-bottom: 0.5rem;
`;

export const EnglishTitle = styled.h1`
  font-size: 2rem;
  font-weight: 700;
  color: ${({ theme }) => theme.text.primary};
`;

export const ReleaseYear = styled.span`
  font-size: 2rem;
  font-weight: 700;
`;

// set max lines to 5
export const Description = styled.p`
  font-size: 1rem;
  font-weight: 400;
  color: ${({ theme }) => theme.text.offWhite};
  line-height: 1.5;
  max-lines: 5;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 5;
  -webkit-box-orient: vertical;
  word-wrap: break-word;
`;

const gap = "0.5rem";
export const Genres = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: ${gap};
`;

export const Genre = styled.p`
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    display: inline-block;
    width: 7px;
    height: 7px;
    -moz-border-radius: 7.5px;
    -webkit-border-radius: 7.5px;
    border-radius: 7.5px;
    background-color: ${({ theme }) => theme.text.secondary};
    margin-right: ${gap};
  }
  &:first-of-type:before {
    display: none;
  }
`;

export const RatingContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 0.5rem;
`;

export const RatingIcon = styled(FaStar)`
  font-size: 1.5rem;
  color: ${({ theme }) => theme.base.mainColor};
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const Rating = styled.span`
  font-size: 1.4rem;
  color: ${({ theme }) => theme.text.primary};
  margin-right: 0.5rem;
  &:last-child {
    margin-right: 0;
  }
  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const MainInfoContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  gap: 2rem;
`;

export const MainInfoWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;

const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.3rem;
`;

export const DetailsContainer = styled(SectionContainer)``;

export const DescriptionContainer = styled(SectionContainer)``;

export const SectionTitle = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
`;

export const MetaInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
`;

export const MetaInfoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;

  width: 230px;
  overflow: hidden;
  font-weight: 300;

  & p {
    width: 100px;
    font-family: ${({ theme }) => theme.text.fonts.primary};
  }
`;
