import styled from 'styled-components';
import Row_ from 'components/Row';
import background from 'assets/png/bgPattern.png';
import { Button as _Button } from 'antd';




export const Row = styled(Row_)`
  background: url(${background}) top center / 100% ${({ theme }) => theme.colors.yellow[100]};
  /* background: ${({ theme }) => theme.colors.yellow[100]}; */
  border: none;
  border-radius: 6px;
  margin: auto;
  width: 75%;
  position:absolute;
  top: 10%;
  left: 50%;
  box-shadow: 0 3px 10px rgb(0 0 0 / 0.2);
  transform: translate(-50%, -50%);
  z-index:1000;

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

  img {
    width: 50%;
  }
  form {
    width: 100%;
  }

  span {
  color: ${({ theme }) => theme.colors.blue[100]};
  font-weight: 500;
}
`;


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


