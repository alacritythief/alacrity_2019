import styled from 'styled-components';
import * as c from '../constants/colors';
import * as d from '../constants/devices';

export const AppContainer = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: ${ c.MOCKUP_RED }
`

export const ContentContainer = styled.div`
  height: 80vh;
  width: calc(100% - 3em);
  background-color: ${ c.MOCKUP_BLUE };
`