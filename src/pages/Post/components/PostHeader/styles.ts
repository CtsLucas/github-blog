import styled from 'styled-components';

export const PostHeaderContainer = styled.div`
  width: 100%;
  background: ${({ theme }) => theme.colors.base.profile};
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  & > .post-header__header {
    display: flex;
    justify-content: space-between;

    & > a {
      color: ${({ theme }) => theme.colors.primary.main};
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
        color: ${({ theme }) => theme.colors.primary.light};
        border-color: ${({ theme }) => theme.colors.primary.light};
      }
    }
  }

  & > .post-header__content {
    margin-top: 1.25rem;

    & > h1 {
      color: ${({ theme }) => theme.colors.base.title};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
    }
  }

  & > .post-header__footer {
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    gap: 1.5rem;

    & > .post-header__footer__items {
      & > span {
        color: ${({ theme }) => theme.colors.base.subtitle};
        font-size: 1rem;
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
