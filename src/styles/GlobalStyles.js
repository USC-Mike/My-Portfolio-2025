import { createGlobalStyle } from "styled-components";

export const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'IBM Plex Mono', monospace;
    background-color:rgb(0, 0, 0);
    color: #000;
    line-height: 1.6;
    overflow-x: hidden;
    scroll-behavior: smooth;
  }

  a {
    text-decoration: none;
    color: inherit;
  }

  button {
    cursor: pointer;
    border: none;
    outline: none;
    font-family: 'IBM Plex Mono', monospace;
  }
`;
