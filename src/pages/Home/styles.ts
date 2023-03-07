import styled from 'styled-components';

export const HomeContainer = styled.div`
  width: 100%;
  max-width: 54rem;
  padding: 0 1rem;

  display: flex;
  justify-content: flex;
  align-items: center;
  flex-direction: column;
`;

export const HomeContent = styled.div`
  width: 100%;
  margin-top: 3rem;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  justify-items: center;
  grid-gap: 2rem;
`;
