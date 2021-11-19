import { Col as _Col } from 'antd';
import styled from 'styled-components';
import background from 'assets/png/bgPattern.png';

export const Div = styled.section`
    width: 100%;
    margin: 0 auto;
    display: flex;
    background: transparent;
    z-index: 100;
    position: absolute;
    height: 50%;
    left: 50%;
    top: 30%;
    transform: translate(-50%,-50%);

       @media (max-width: ${({ theme }) => theme.media.sm}) {
      position: relative;
      padding: 0;
      margin: -28rem auto;
  }

    @media only screen 
    and (min-device-width: 320px) 
    and (max-device-width: 480px)
    and (-webkit-min-device-pixel-ratio: 2) {
      position: relative;
      padding: 0;
      margin: -25rem auto;
  }


  h5,
  p {
    color: ${({ theme }) => theme.colors.blue[100]};
    font-weight: 900;

    span {
      color: ${({ theme }) => theme.colors.yellow[100]};
    }
  }
  p {
    font-weight: 500;
  }

  form {
    width: 100%;
  }

  span {
  color: ${({ theme }) => theme.colors.blue[100]};
  font-weight: 500;
}

`;

export const Main = styled.main`
background: url(${background}) top center / 100% ${({ theme }) => theme.colors.yellow[100]};
box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
display: flex;
width: 70%;
margin: 0 auto;
justify-content: center;
align-items: center;
border: none;
border-radius: 8px;

  @media only screen and (max-width: 756px) {
   width: 90%;
  }

`

export const Button = styled.button`
background-color: ${({ theme }) => theme.colors.blue[100]};
color: ${({ theme }) => theme.colors.yellow[100]};
padding: 11px 20px;
border-radius: 0 5px 5px 0;
transition: all 0.5s;
position: relative;
cursor: pointer;

&:hover {
border: 1px solid ${({ theme }) => theme.colors.yellow[100]};
}


&:hover::after {
  opacity: 1;
}
`

export const HelpText = styled.p`
    color: ${({ theme }) => theme.colors.blue[100]};
`


export const Col = styled(_Col)`
  background: transparent;
  z-index: 500;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  

  img {
   @media only screen and (max-width: 756px) {
   width: 30%;
  }
  }
`;