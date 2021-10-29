import Row_ from 'components/Row';
import styled from 'styled-components';

export const Row = styled(Row_)`
  background: ${({ theme }) => theme.colors.blue[100]};

  h1 {
    color: ${({ theme }) => theme.colors.yellow[100]};
  }

  p {
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;
