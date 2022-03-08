import { createGlobalStyle } from "styled-components";
const styled = { createGlobalStyle };

const GlobalStyle = styled.createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }
  body {
    background: #1b1b1b;
    font-family: "Inter", sans-serif;
  }
  button {
    font-weight: bold;
    font-size: 1.1rem;
    cursor: pointer;
    padding: 1rem 2rem;
    border: 3px solid #23d997;
    background: transparent;
    color: white;
    transition: all 0.5s ease;
    font-family: "Inter", sans-serif;
    &:hover {
      background: #23d997;
      color: white;
    }
  }
  h1 {
    font-size: 3rem;
    @media screen and (max-width: 650px) {
      font-size: 2rem;
    }
  }
  h2 {
    font-size: 2rem;
    @media screen and (max-width: 650px) {
      font-size: 1.5rem;
    }
  }
  h3 {
    font-size: 1.5rem;
    color: white;
    @media screen and (max-width: 650px) {
      font-size: 1.25rem;
    }
  }
  h4 {
    font-weight: bold;
    font-size: 1.25rem;
    @media screen and (max-width: 650px) {
      font-size: 1rem;
    }
  }
  p {
    color: #ccc;
    font-size: 1rem;
    line-height: 150%;
    @media screen and (max-width: 650px) {
      font-size: 0.9rem;
    }
  }
  span {
    font-weight: bold;
    color: #23d997;
  }
  a {
    font-size: 1.1rem;
  }
`;

export default GlobalStyle;
