import styled from 'styled-components';
import Card_ from 'components/Card';

export const Card = styled(Card_)`
  margin: 2rem 0;
  h5 {
    color: ${({ theme }) => theme.colors.blue[100]};
  }
  img {
    margin: 1rem 0;
  }
`;
