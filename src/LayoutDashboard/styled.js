import { Layout as _Layout } from 'antd';
import styled from 'styled-components';

const Layout = styled(_Layout)`
  background-color: #e5e5e5;
  background: #e5e5e5;
  height: 100%;
`;

export const ContentContent = styled.main`
  margin: 9rem 7rem 10rem;
  height: auto;

  @media screen and (max-width: 320px) {
    margin: 12rem 1rem 10rem;
  }
  
  @media screen and (max-width: 600px) {
    margin: 15rem 1rem 10rem;
  }
`;
export default Layout;
