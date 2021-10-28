import styled from 'styled-components';
import { Row as _Row } from 'antd';

const Row = styled(_Row)`
  position: relative;
  padding: 3.5rem 10rem;

  @media only screen and (max-width: 756px) {
    padding: 1rem;
  }
`;

export default Row;
