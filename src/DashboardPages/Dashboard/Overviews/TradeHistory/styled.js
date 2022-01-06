import styled from 'styled-components';

import { Button as _Button, Card as _Card } from 'antd';

const TradeHistoryWrapper = styled.div`
  padding: 2rem 0;
`;

export const Card = styled(_Card)`
         .card_title {
           display: flex;
           align-items: center;
           justify-content: space-between;

           h5 {
             font-style: normal;
             font-weight: 600;
             font-size: 20px;
             line-height: 24px;
             color: #001950;
             margin: 0;
           }
         }
         .table_contents {
           margin-top: 2rem;
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
         color: #001950;
       `;

export default TradeHistoryWrapper;
