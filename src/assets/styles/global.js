import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    color: ${({ theme }) => theme.secondary};
    font-family: 'DM Sans', sans-serif;
    outline: none;
  }

  body {
    background: ${({ theme }) => theme.backgroundColor};
    font-size: 16px;
    padding-left: 25px;
    padding-right: 25px;
  }

  button {
    cursor: pointer;
  }
`;
