import { createGlobalStyle } from "styled-components";

// GlobalStyles was used to facilitate font consistancy
// to clean up the UL and LI

export default createGlobalStyle`
  *,
  *:before,
  *:after {
      box-sizing: border-box;
      -webkit-font-smoothing: antialiased;
      scroll-behavior: smooth;
    margin: 0;
    padding: 0;
  }
  ul {
  list-style: none;
  padding: 0;
}
body{
    font-family: 'Raleway', sans-serif;
        font-size: 1.5em;
        font-weight: 1000;
        background-color: black;
        color: white;
    }
`;
