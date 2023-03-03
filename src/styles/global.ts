import { createGlobalStyle } from 'styled-components';

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background: ${({ theme }) => theme.colors.base.background};
    color: ${({ theme }) => theme.colors.base.text};
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Nunito', sans-serif;
    font-weight: 400;
    font-size: 1rem;
    border: none;
  }

  button {
    cursor: pointer;
  }

  :focus {
    outline: 0;
    box-shadow: 0 0 0 2px ${({ theme }) => theme.colors.primary.main};
  }
`;
