import styled from "styled-components";

export const Container = styled.div`
  position: relative;
  width: 100%;
  max-width: 1750px;
  margin: 0 auto;
  padding: 0 3rem;
  padding-bottom: 3rem;
  @media (max-width: 768px) {
    padding: 0 1rem;
  }
`;

export const ContainerNoPadding = styled(Container)`
  padding: 0;
  overflow: hidden;
`;

export const SectionContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 10px;
`;

export const DefaultButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.base.navBg};
  border-radius: 8px;
  padding: 0.7rem 2rem;
  cursor: pointer;
  transition: all 0.3s ease-in-out;
  :hover,
  :focus {
    opacity: 0.8;
  }
`;
