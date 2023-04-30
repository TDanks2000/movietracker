import { DefaultButton } from "@/styles/shared";
import styled from "styled-components";

export const BannerItemContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
`;

export const BackgroundContainer = styled.div`
  z-index: -1;
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  & * {
    width: 100%;
    height: 100%;
    object-fit: cover;
    object-position: center;
  }
`;

export const BannerItemWrapper = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding-left: 3rem;
  gap: 0.4rem;
  background: linear-gradient(
    to right,
    rgba(0, 0, 0, 0.4) 60%,
    transparent 100%
  );
`;

export const Title = styled.h1`
  text-overflow: ellipsis;
  width: 100%;
  font-weight: bold;
  font-size: 2.5rem;
`;

export const MetaInfoContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  color: ${({ theme }) => theme.text.offWhite};
  gap: 0.5rem;
`;

export const MetaInfoItemDescription = styled.p`
  font-size: 0.9rem;
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

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  gap: 1.5rem;
  margin-top: 1rem;
`;

export const AddToListButton = styled(DefaultButton)`
  background: ${({ theme }) => theme.base.mainColor};
  font-weight: bold;
`;

export const TrailerButton = styled(DefaultButton)`
  color: ${({ theme }) => theme.base.mainColor};
  background: ${({ theme }) => theme.base.SecondColor};
  font-weight: bold;
`;
