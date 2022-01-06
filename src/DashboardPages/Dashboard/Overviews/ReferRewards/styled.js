import styled from 'styled-components';

import { Button as _Button, Card as _Card } from 'antd';

const ReferRewardWrapper = styled.div``;

export const Card = styled(_Card)`
  .card_contents {
    display: flex;
    justify-content: space-between;

    .btn_div {
      display: flex;
      flex-direction: column;
      justify-content: space-around;
    }
    h6 {
      font-style: normal;
      font-weight: 600;
      font-size: 13px;
      line-height: 16px;
      letter-spacing: 0.5px;
      color: #fcc700;
      opacity: 0.8;
    }

    h4 {
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 22px;
      color: #fcc700;
    }
  }
`;
export const Button = styled(_Button)`
         font-family: Museo Sans Rounded;
         width: 161px;
         height: 40px;
         font-style: normal;
         font-weight: normal;
         font-size: 14px;
         line-height: 17px;
         letter-spacing: 0.4px;
         color: #001950;
         background: #fcc700;
         border-radius: 18px;
         border: none;
       `;

export default ReferRewardWrapper;
