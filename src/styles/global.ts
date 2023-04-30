import { rgba } from "polished";
import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    body {
      font-family: ${({ theme }) => theme.text.fonts.primary}, sans-serif;
      background-color: ${({ theme }) => theme.base.bg};
      color: ${({ theme }) => theme.text.primary};
      overflow: hidden;
    }
    ::-webkit-scrollbar {
      width: 8px;             
    }
    ::-webkit-scrollbar-track {
      background-color: ${({ theme }) => theme.base.navBg};
    }
    ::-webkit-scrollbar-thumb {
      background-color: ${({ theme }) => rgba(theme.base.mainColor, 0.5)};
      border-radius: 1rem;
    }
    media-player {
      position: relative;
    }

`;

export default GlobalStyle;
