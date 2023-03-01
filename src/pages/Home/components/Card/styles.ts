import styled from 'styled-components';

export const CardContainer = styled.div`
  max-width: 416px;
  max-height: 260px;
  background: ${({ theme }) => theme.colors.base.post};
  padding: 2rem;
  border-radius: 10px;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  & > .title {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;

    & > strong {
      display: block;
      max-width: 17.75rem;

      color: ${({ theme }) => theme.colors.base.title};
      font-size: 1.25rem;
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

  & > .description {
    -webkit-line-clamp: 4;
    -webkit-box-orient: vertical;
    display: -webkit-box;
    overflow: hidden;
  }
`;
