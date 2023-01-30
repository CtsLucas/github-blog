import styled from 'styled-components';

export const PostContainer = styled.div`
  width: 100%;
  max-width: 54rem;
`;

export const PostHeader = styled.div`
  background: ${({ theme }) => theme.colors.base.profile};
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  & > .actions {
    display: flex;
    justify-content: space-between;

    & > a {
      color: ${({ theme }) => theme.colors.blue};
      font-size: 0.75rem;
      font-weight: 700;
      line-height: 160%;
      border-bottom: 2px solid transparent;

      text-transform: uppercase;
      text-decoration: none;
      transition: all ease-in 0.2s;

      display: flex;
      align-items: center;
      justify-content: space-between;
      gap: 0.5rem;

      &:hover {
        opacity: 0.6;
        border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
      }

      &:visited {
        color: ${({ theme }) => theme.colors.blue};
      }
    }
  }

  & > .title {
    margin-top: 1.25rem;

    & > h1 {
      color: ${({ theme }) => theme.colors.base.title};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
    }
  }

  & > .details {
    margin-top: 1.5rem;

    & > ul {
      list-style: none;

      display: flex;
      gap: 1.5rem;

      & > li {
        color: ${({ theme }) => theme.colors.base.subtitle};
        font-size: 1rem;
        line-height: 160%;
        font-weight: 400;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        & > svg {
          color: ${({ theme }) => theme.colors.base.label};
        }
      }
    }
  }
`;
