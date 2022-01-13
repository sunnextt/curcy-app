import styled from 'styled-components';
import { Row as _Row } from 'antd';
import { Link as _Link } from 'react-router-dom';

export const Row = styled(_Row)`
  padding: 0 7.5rem;
  margin: 0;

  @media screen and (max-width: 760px) {
    padding: 0 1rem;
  }
  @media screen and (max-width: 796px) {
    padding: 0 6rem;
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
  flex-direction: ${({ orientation }) => (orientation === 'mobile' ? 'column' : 'row')};
  justify-content: space-between;
  align-items: center;
  margin: 0;
  list-style: none;
  list-style-type: none;
`;

export const Li = styled.li`
  display: ${({ orientation }) => (orientation === 'mobile' ? 'block' : 'inline-block')};
  ;
  ${({ orientation }) => (orientation === 'mobile' ? 'padding: .5rem 0;' : 'padding: 0 1rem;')}
  color: ${({ theme }) => theme.colors.blue[100]};
  font-weight: 500;
  margin: ${({ orientation }) => orientation === 'mobile' && '1rem 0'};
`;

export const Link = styled(_Link)`
  color: ${({ orientation }) => (orientation === 'mobile' ? '#001950' : '#ffffff')};
  padding: 1rem 16px;
  font-size: ${({ orientation }) => orientation === 'mobile' && '2rem'};
  &:hover {
    border-bottom: ${({ orientation }) => orientation !== 'mobile' && '5px solid #fcc700'};
    transition: 0.3s;
  }
  text-transform: capitalize;
`;
