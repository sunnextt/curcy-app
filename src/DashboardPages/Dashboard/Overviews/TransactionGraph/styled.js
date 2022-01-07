import styled from 'styled-components';

import { Button as _Button, Card as _Card } from 'antd';

const TransactionGraphWrapper = styled.div``;

export const Card = styled(_Card)`
  .card_title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 1rem;

    .pop_over {
      background: #ffffff;
      padding: 4px 4px 0px;
      border-radius: 12px;
      .downfilled {
        padding: 4px 4px 2px;
        background: #ffffff;
        border: none;
        border: 1px solid #ffffff;
        border-radius: 12px;
      }
    }
    h6 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #001950;
      padding-bottom: 1rem;
    }

    h2 {
      font-style: normal;
      font-weight: 600;
      font-size: 45px;
      line-height: 28px;
      display: flex;
      align-items: center;
      color: #001950;
    }
  }
`;
export const Button = styled(_Button)`
  font-family: Museo Sans Rounded;
  font-style: normal;
  font-weight: 600;
  font-size: 12px;
  line-height: 28px;
  display: flex;
  align-items: center;
  text-align: right;
  color: #001950;
`;

export default TransactionGraphWrapper;
