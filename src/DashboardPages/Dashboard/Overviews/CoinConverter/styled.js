import styled from 'styled-components';

import { Button as _Button, Card as _Card } from 'antd';

const CoinConverterWrapper = styled.div``;

export const Card = styled(_Card)`
  .news_content_div {
    display: flex;
    flex-direction: column;
    justify-content: space-around;

    a {
      line-height: 57px;
    }

    h6 {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 26px;
      color: #001950;
    }

    h4 {
      font-style: normal;
      font-weight: 600;
      font-size: 20px;
      line-height: 24px;
      color: #001950;
    }

    p {
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: normal;
      font-size: 14px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #001950;
      margin: 0;
      padding: 0 1rem;
      width: 70%;
    }
  }
`;
export const Button = styled(_Button)`
  font-family: Museo Sans Rounded;
  font-weight: 600;
  font-size: 16px;
  font-style: normal;
  color: #fcc700;
  letter-spacing: 0.4px;
  background: #001950;
  border-radius: 6px;
  border: none;
  height: 4rem;

  @media screen and (max-width: 600px) {
    height: 6rem;
  }

  @media screen and (max-width: 1200px) and (min-width: 859px) {
    height: 4.5rem;
  }
  @media screen and (max-width: 859px) and (min-width: 600px) {
    height: 6rem;
  }
`;

export default CoinConverterWrapper;
