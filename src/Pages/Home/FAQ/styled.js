import styled from 'styled-components';
import Row_ from 'components/Row';
import Card from 'components/Card';

export const Row = styled(Row_)`
  h1 {
    color: ${({ theme }) => theme.colors.blue[100]};
    width: 100%;
    text-align: center;
  }
`;

export const CardQuestion = styled(Card)`
  background: ${({ theme }) => theme.colors.white[300]};
  color: ${({ theme }) => theme.colors.blue[100]};
  margin-bottom: 5px;

  .ant-card-body {
    padding: 1rem;
  }
`;

export const CardAnswer = styled(Card)`
  background: ${({ theme }) => theme.colors.white[300]};
  color: ${({ theme }) => theme.colors.blue[100]};
  padding-bottom: 5rem;
`;
