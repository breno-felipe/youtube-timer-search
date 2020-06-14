import styled from 'styled-components';
import { Color, Sizes } from '../../styles/constants';

export const YtdHeader = styled.header`
  width: 100%;
  background: ${Color.secondary};
  padding: ${Sizes.xs};
  display: flex;
  align-items: center;
`;

export const YtdNavbar = styled.nav`
  display: flex;
  align-items: center;
  padding: 10px;
`;
