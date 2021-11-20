import { Col as _Col } from 'antd';
import styled from 'styled-components';
import background from 'assets/png/bgPattern.png';

export const Div = styled.div`
    background: url(${background}) top center / 100% ${({ theme }) => theme.colors.yellow[100]};
    box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
    border: none;
    border-radius: 8px;
    position: absolute;
    height: 50%;
    width: 70%;
    top:15%;
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;

  @media (max-width: ${({ theme }) => theme.media.sm}) {
   width: 90%;
   position: relative;
   margin: 3rem auto 5rem;
   top: auto;
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


  //      @media (max-width: ${({ theme }) => theme.media.sm}) {
  //     position: relative;
  //     padding: 0;
  //     margin: -28rem auto;
  // }

  //   @media only screen 
  //   and (min-device-width: 320px) 
  //   and (max-device-width: 480px)
  //   and (-webkit-min-device-pixel-ratio: 2) {
  //     position: relative;
  //     padding: 0;
  //     margin: -25rem auto;
  // }
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