import styled from 'styled-components';
import { Col as _Col } from 'antd';

export const Col = styled(_Col)`
  background: transparent;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;

  @media only screen and (max-width: 756px) {
    align-items: center;
    text-align: center;
    padding: 2.5rem 0;
  }
`;

export default Col;
