import styled from "styled-components";

export const BannerContainer = styled.div`
  width: 100%;
  height: 400px;
  margin-top: 2rem;
`;

export const BannerWrapper = styled.div`
  width: 70%;
  height: 100%;
  margin: 0 auto;
  border-radius: 8px;
  overflow: hidden;
  position: relative;
`;

export const PaginationContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  display: flex;
  gap: 0.5rem;
  padding: 1.5rem 2.5rem;
`;

export const PaginationMarker = styled.div`
  background: ${({ theme }) => theme.base.SecondColor};
  height: 8px;
  width: 30px;
  box-shadow: 2px 2px 2px rgba(0, 0, 0, 0.2);
  transition: all 0.25s ease-in-out;

  &.active {
    background: ${({ theme }) => theme.base.mainColor};
    width: 60px;
  }

  &:hover {
    background: ${({ theme }) => theme.base.mainColor};
    width: 60px;
  }
`;
