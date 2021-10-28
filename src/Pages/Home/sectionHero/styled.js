import styled from 'styled-components';
import Col_ from 'components/Col';

export const Col = styled(Col_)`
  .hero {
    width: 100%;

    @media only screen and (max-width: 756px) {
      width: 60%;
    }
  }

  h1 {
    color: ${({ theme }) => theme.colors.blue[100]} !important;
    margin: 0;
  }

  .hero-text--large {
    font-size: 4rem;
    font-weight: 700;
    line-height: 6.5rem;
    margin: 1rem 0 2rem 0;

    @media only screen and (max-width: 756px) {
      width: 60%;
    }
  }
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
  clip-path: polygon(0 0, 100% 0, 100% 75%, 0% 100%);
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

    @media only screen and (max-width: 756px) {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    top: -50%;
    left: -350%;

    @media only screen and (max-width: 756px) {
      top: -50%;
      left: -30%;
    }
  }

  &::after {
    top: -200%;
    left: 50%;

    @media only screen and (max-width: 756px) {
      top: -20%;
      left: 30%;
    }
  }
`;
