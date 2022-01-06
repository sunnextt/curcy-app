import styled from 'styled-components';

import { Button as _Button, Card as _Card } from 'antd';

const WalletWrapper = styled.div``;

export const Card = styled(_Card)`
         .card_contents {
           display: flex;
           align-items: center;
           justify-content: space-between;
           padding: 1.6rem 1rem;

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
         width: 161px;
         height: 47px;
         font-style: normal;
         font-weight: 600;
         font-size: 14px;
         line-height: 17px;
         letter-spacing: 0.4px;
         color: #001950;
         background: #fcc700;
         border: none;
         border-radius: 23.5px;
       `;

export default WalletWrapper;
