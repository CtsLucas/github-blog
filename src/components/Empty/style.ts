import styled from 'styled-components';

export const EmptyContainer = styled.div`
  width: 100%;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  gap: 1rem;

  & > strong {
    color: ${({ theme }) => theme.colors.base.title};
    font-size: 1.5rem;
    font-weight: 700;
  }
`;
