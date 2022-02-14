import styled from 'styled-components';
import { Layout } from 'antd';

export const HeaderContext = styled(Layout.Header)`
  padding: 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 1000;
  background: ${({ theme }) => theme.colors.white[100]};
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  .logo {
    height: 2rem;
    margin-right: 3.5rem;
  }
  .button-group,
  .menu-icon {
    margin-left: auto;
  }
  .button-group {
    display: flex;
    @media only screen and (max-width: 756px) {
      display: none;
    }
  }
  button {
    margin: 0 0 0 1rem;
  }

  @media only screen and (max-width: 756px) {
    padding: 1rem 1.5rem;
  }
`;
