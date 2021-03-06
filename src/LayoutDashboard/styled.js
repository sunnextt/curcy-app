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
    margin: 6rem 1rem 6rem;
  }

  @media screen and (max-width: 600px) {
    margin: 6rem 1rem;
  }

  @media screen and (max-width: 768px) and (min-width: 408px) {
    margin: 6rem 2rem 6rem;
  }

  @media screen and (max-width: 900px) and (min-width: 768px) {
    margin: 10rem 2rem 6rem;
  }
  @media screen and (max-width: 1059px) and (min-width: 992px) {
    margin: 12rem 2rem 6rem;
  }
`;
export default Layout;
