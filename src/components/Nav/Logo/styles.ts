import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;

export const Logo = styled.h1`
  font-size: 1.5rem;
  font-weight: 700;
  color: ${({ theme }) => theme.base.mainColor};
  text-transform: uppercase;

  & span {
    color: ${({ theme }) => theme.text.primary};
    font-size: 1.3rem;
    text-transform: lowercase;
  }
`;
