import styled from 'styled-components';

export const PostContentContainer = styled.section`
  width: 100%;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
  gap: 1rem;

  h1,
  h2,
  h3 {
    color: ${({ theme }) => theme.colors.primary.dark};
  }

  img {
    width: 100%;
  }

  a {
    color: ${({ theme }) => theme.colors.primary.main};
    text-decoration: underline;
    transition: text-decoration 0.4s ease;

    &:hover {
      color: ${({ theme }) => theme.colors.primary.light};
    }
  }

  ul {
    list-style: inherit;
    padding-left: 1.5rem;
  }

  pre {
    background: ${({ theme }) => theme.colors.base.post};
    padding: 1rem;
    border-radius: 4px;

    & > div {
      background: none !important;
      padding: 0 !important;
      margin: 0 !important;
      code {
        font-family: "Fira Code", monospace !important;
        line-height: 160% !important;
      }
    }
  }
`;
