import styled from 'styled-components';

export const HeaderContext = styled.header`
  padding: 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  .logo {
    height: 2rem;
    margin-right: 3.5rem;
  }
  .button-group,
  .menu-icon {
    margin-left: auto;
  }
  button {
    margin: 0 0 0 1rem;
  }

  @media only screen and (max-width: 756px) {
    padding: 1rem 1.5rem;
  }
`;
