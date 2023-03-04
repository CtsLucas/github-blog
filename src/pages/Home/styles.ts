import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  flex-direction: column;

  max-width: 54rem;
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
