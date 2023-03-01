import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  flex-direction: column;

  max-width: 54rem;
`;

export const Profile = styled.div`
  background: ${({ theme }) => theme.colors.base.profile};
  padding: 2rem 2.5rem;
  margin-top: -5.5rem;

  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 10px;

  display: flex;
  gap: 2rem;
`;

export const PhotoWrap = styled.div`
  & > img {
    width: 9.25rem;
    height: 9.25rem;
    border-radius: 8px;
  }
`;

export const InfoWrap = styled.div`
  .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & > h1 {
      color: ${({ theme }) => theme.colors.base.title};
      font-size: 1.5rem;
      font-weight: 700;
      line-height: 130%;
    }

    & > a {
      color: ${({ theme }) => theme.colors.blue};
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
        opacity: 0.6;
        border-bottom: 2px solid ${({ theme }) => theme.colors.blue};
      }
    }
  }

  .description {
    margin-top: 0.5rem;

    & > p {
      color: ${({ theme }) => theme.colors.base.text};
      font-size: 1rem;
      line-height: 160%;
      font-weight: 400;
    }
  }

  .details {
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

export const Form = styled.form`
  margin-top: 4.5rem;

  width: 100%;

  display: flex;
  flex-direction: column;
  gap: 0.75rem;

  & > .header {
    display: flex;
    justify-content: space-between;
    align-items: center;

    & > strong {
      color: ${({ theme }) => theme.colors.base.subtitle};
      font-size: 1.125rem;
      font-weight: 700;
      line-height: 160%;
    }

    & > span {
      color: ${({ theme }) => theme.colors.base.span};
      font-size: 0.875rem;
      font-weight: 400;
      line-height: 160%;
    }
  }

  & > input {
    width: 100%;
    padding: 1rem 0.75rem;
    background: ${({ theme }) => theme.colors.base.input};
    border: 1px solid ${({ theme }) => theme.colors.base.border};
    border-radius: 6px;

    color: ${({ theme }) => theme.colors.base.text};
    font-size: 1rem;
    font-weight: 400;
    line-height: 160%;

    &::placeholder {
      color: ${({ theme }) => theme.colors.base.label};
    }
  }
`;

export const ListCards = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;
