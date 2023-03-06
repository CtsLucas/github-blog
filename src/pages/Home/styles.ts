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
  grid-template-columns: 1fr 1fr;
  grid-gap: 2rem;
`;
