import styled from 'styled-components';

import { Button as _Button, Card as _Card } from 'antd';

const TransactionGraphWrapper = styled.div``;

export const Card = styled(_Card)`
         .card_title {
           display: flex;
           align-items: center;
           justify-content: space-between;
           padding: 0 1rem;

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
`;

export default TransactionGraphWrapper;
