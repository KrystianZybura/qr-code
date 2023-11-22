import { createGlobalStyle } from "styled-components";

const styled = { createGlobalStyle };

export const GlobalStyle = styled.createGlobalStyle`
  html {
    *,
    *::before,
    *::after {
      box-sizing: border-box;
      font-family: "Outfit", sans-serif;
    }

    body {
      background: hsl(212, 45%, 89%);
      height: 100vh;
      display: grid;
      place-items: center;
    }
  }
`;
