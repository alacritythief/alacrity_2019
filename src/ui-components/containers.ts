import styled from 'styled-components';
import * as c from '../constants/colors';
import * as d from '../constants/devices';
import treeBg from '../assets/img/tree.jpg';

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-image: url(${treeBg});
  background-size: cover;
  background-position: center;
`

export const ContentContainer = styled.div`
  color: ${ c.WHITE };
  height: 80vh;
  width: 80%;
  background-color: ${ c.BLACK };
  opacity: 0.85;
  box-shadow: 0 6px 10px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
`