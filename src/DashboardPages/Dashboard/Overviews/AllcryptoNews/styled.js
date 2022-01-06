import styled from 'styled-components';

import { Button as _Button, Card as _Card } from 'antd';

const AllCryptoNewsWrapper = styled.div``;

export const Card = styled(_Card)`
  .news_content_div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    h6 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #001950;
      padding: 2rem 0;
    }

    h3 {
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: bold;
      font-size: 37px;
      line-height: 44px;
      color: #001950;
      margin: 0;
    }
  }
`;
export const Button = styled(_Button)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-style: normal;
  font-weight: normal;
  width: 161px;
  height: 40px;
  font-size: 14px;
  line-height: 17px;
  letter-spacing: 0.4px;
  color: #ffffff;
  background: #001950;
  border-radius: 18px;
  border: none;
`;

export default AllCryptoNewsWrapper;
