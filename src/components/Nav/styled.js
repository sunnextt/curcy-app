import styled from 'styled-components';

export const NavContext = styled.nav`
  display: inline-block;
  padding: 0 5px;
`;

export const Ul = styled.ul`
  margin-bottom: 0;
`;

export const Li = styled.li`
  display: inline-block;
  padding: 0 1rem;
  color: ${({ theme }) => theme.colors.blue[100]};
  font-weight: 500;
`;
