import styled from 'styled-components';

export const HeaderContext = styled.header`
  padding: 1rem 10rem;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  z-index: 500;
  background: ${({ theme }) => theme.colors.white[100]};
  .logo {
    height: 2rem;
    margin-right: 3.5rem;
  }
  .button-group,
  .menu-icon {
    margin-left: auto;
  }
  .button-group {
    display: block;
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
