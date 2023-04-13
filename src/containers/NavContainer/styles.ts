import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  height: 70px;
  background: ${({ theme }) => theme.base.navBg};
  margin-bottom: 20px;
  overflow: hidden;
`;
