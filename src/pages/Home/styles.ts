import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 54rem;

  display: flex;
  justify-content: flex;
  align-items: center;
  flex-direction: column;
`;

export const HomeContent = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(416px, 1fr));
  justify-items: center;
  grid-gap: 2rem;
`;

export const ListEmpty = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & > strong {
    color: ${({ theme }) => theme.colors.base.text};
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
