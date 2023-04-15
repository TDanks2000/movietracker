import styled from "styled-components";

export const OutputContainer = styled.div`
  width: 100%;
  position: absolute;
  top: calc(100% + 10px);
  background: ${({ theme }) => theme.base.offDarkBg};
  padding: 10px;
  border-radius: 8px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
