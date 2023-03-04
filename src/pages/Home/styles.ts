import styled from 'styled-components';

export const HomeContainer = styled.div`
  display: flex;
  justify-content: flex;
  align-items: center;
  flex-direction: column;

  max-width: 54rem;
`;

export const HomeContent = styled.div`
  margin-top: 3rem;

  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;
