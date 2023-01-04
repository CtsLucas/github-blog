import styled from 'styled-components';

import cover from '../../assets/cover.png';

export const HeaderContainer = styled.header`
  background: url(${cover}) no-repeat center/ cover;
  width: 100%;
  height: 18.5rem;

  display: flex;
  justify-content: center;
  padding-top: 4rem;

  img {
    width: max-content;
    height: max-content;
  }
`;
