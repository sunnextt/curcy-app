import Card from 'components/Card';
import styled from 'styled-components';
import background from 'assets/png/bgPattern2.png';

const genericStyle = `
  text-align: left;
  justify-content: left;
`;

export const CardLeft = styled(Card)`
  ${genericStyle}
  padding: 2.5rem 2rem 0 2rem;
  background: linear-gradient(
    180deg,
    ${({ theme }) => theme.colors.blue[200]} 0%,
    ${({ theme }) => theme.colors.blue[100]} 100%
  );

  h2 {
    color: ${({ theme }) => theme.colors.yellow[100]};
  }

  p {
    color: ${({ theme }) => theme.colors.white[100]};
  }

  img {
    transform: translate(0, 24px);
  }
`;

export const CardRight = styled(Card)`
  ${genericStyle}
  box-shadow: 0px -4px 45px rgba(0, 0, 0, 0.1);
  background: url(${background}) top center / 100%;
  margin: 0;

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

  @media only screen and (max-width: 750px) {
    margin: 1rem 0;
  }
`;
