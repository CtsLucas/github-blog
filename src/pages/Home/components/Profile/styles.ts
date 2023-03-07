import styled from 'styled-components';

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme.colors.base.profile};
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  align-items: center;
  gap: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const ProfileAvatar = styled.div`
  & > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const ProfileContent = styled.div`
  & > .profile-content__header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    flex-wrap: wrap;

    & > h1 {
      color: ${({ theme }) => theme.colors.base.title};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
    }

    & > a {
      color: ${({ theme }) => theme.colors.primary.main};
      font-weight: 700;
      font-size: 0.75rem;
      line-height: 130%;
      text-decoration: none;
      text-transform: uppercase;
      border-bottom: 2px solid transparent;
      transition: all ease-in 0.2s;

      display: flex;
      align-items: flex-start;
      justify-content: space-between;
      gap: 0.5rem;

      &:hover {
        color: ${({ theme }) => theme.colors.primary.light};
        border-color: ${({ theme }) => theme.colors.primary.light};
      }
    }
  }

  .profile-content__content {
    margin-top: 0.5rem;

    & > p {
      color: ${({ theme }) => theme.colors.base.text};
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
    }
  }

  .profile-content__footer {
    margin-top: 1.5rem;

    display: flex;
    align-items: center;
    justify-content: flex-start;
    gap: 1.5rem;
    flex-wrap: wrap;

    & > .profile-content__footer__items {
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
