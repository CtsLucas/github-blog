import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const CardContainer = styled(Link)`
  max-width: 416px;
  max-height: 260px;
  background: ${({ theme }) => theme.colors.base.post};
  padding: 2rem;
  border-radius: 10px;
  border: 2px solid transparent;
  transition: all ease-in 0.2s;

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  text-decoration: none;

  &:hover {
    background: ${({ theme }) => theme.colors.base.profile};
    border-color: ${({ theme }) => theme.colors.primary.main};
  }

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
      white-space: nowrap;
    }
  }

  & > .description {
    & > p {
      color: ${({ theme }) => theme.colors.base.text};
      font-size: 1rem;
      font-weight: 400;
      line-height: 160%;

      -webkit-line-clamp: 4;
      -webkit-box-orient: vertical;
      display: -webkit-box;
      overflow: hidden;
    }
  }
`;
