import styled from "styled-components";
import { FaSearch } from "react-icons/fa";

export const Container = styled.div`
  width: 100%;
  height: 40px;
  position: relative;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: ${({ theme }) => theme.base.offDarkBg};

  border-radius: 8px;
  overflow: hidden;
`;

export const Input = styled.input`
  height: 100%;
  flex: 1;
  padding: 0 10px;
  &::placeholder {
    color: ${({ theme }) => theme.text.secondary};
  }
`;

export const Button = styled.button`
  height: 100%;
  width: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
  transition: all 0.2s ease-in-out;
  cursor: pointer;
  border-left: 2px solid ${({ theme }) => theme.base.navBg};

  color: ${({ theme }) => theme.text.secondary};
  &:hover {
    color: ${({ theme }) => theme.base.mainColor};
  }
`;

export const ButtonIcon = styled(FaSearch)`
  font-size: 1.2rem;
`;
