import styled from 'styled-components';
import { Row, Col as _Col } from 'antd';

export const HeroContext = styled(Row)`
  position: relative;
`;

export const Col = styled(_Col)`
  background: transparent;
  z-index: 500;
`;

export const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 200;
  background: ${({ theme }) => theme.colors.white[200]}b2;
  backdrop-filter: blur(100px);
`;

export const BackgroundChild = styled.div`
  display: inline-block;
  height: 16rem;
  width: 16rem;
  border-radius: 50%;
  position: absolute;
  top: 50%;
  left: 60%;
  transform: translate(-50%, -50%);
  background: ${({ theme }) => theme.colors.yellow[100]};
  z-index: 50;

  &::before,
  &::after {
    content: '';
    display: inline-block;
    position: absolute;
    width: 200%;
    height: 200%;
    border-radius: 50%;
    background: ${({ theme }) => theme.colors.yellow[100]};
  }

  &::before {
    top: -50%;
    left: -350%;
  }

  &::after {
    top: -200%;
    left: 150%;
  }
`;
