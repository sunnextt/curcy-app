import styled from 'styled-components';
import { Row as _Row } from 'antd';
import { Link as _Link } from 'react-router-dom';

export const Row = styled(_Row)`
  padding: 0 7.5rem;
  margin: 0;

  @media screen and (max-width: 760px) {
    padding: 0 1rem;
  }

  h1 {
    margin: 0;
  }
`;

export const NavWrap = styled.nav`
  padding: 2rem 0 1rem;
`;
export const Ul = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0;
  list-style: none;
  list-style-type: none;
`;

export const Li = styled.li``;

export const Link = styled(_Link)`
  color: #fff;
  padding: 1rem 16px;

  &:hover {
    border-bottom: 5px solid #fcc700;
    transition: 0.3s;
  }
`;
