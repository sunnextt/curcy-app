import styled from 'styled-components';
import Card from 'components/Card';

export const CardOuter = styled(Card)`
  background: ${({ theme }) => theme.colors.yellow[100]};
  margin: auto;
  width: 95%;

  h1,
  h4,
  p {
    color: ${({ theme }) => theme.colors.blue[100]};
  }
`;

export const CardInner = styled(Card)`
  height: 100%;
`;
