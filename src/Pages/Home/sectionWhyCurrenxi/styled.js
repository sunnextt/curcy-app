import Row_ from 'components/Row';
import styled from 'styled-components';
import background from 'assets/png/bgPattern.png';

export const Row = styled(Row_)`
  background: url(${background}) top center / 100% ${({ theme }) => theme.colors.yellow[100]};
  justify-content: center;

  h1 {
    text-align: center;
    color: ${({ theme }) => theme.colors.blue[100]};
    width: 100%;
  }
`;
