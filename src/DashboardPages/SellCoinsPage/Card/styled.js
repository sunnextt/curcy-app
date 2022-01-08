import styled from 'styled-components';

const CContext = styled.div`
  display: flex;
  flex-direction: column;
  background: #001950;
  box-shadow: 0px 4px 20px rgba(0, 25, 80, 0.25);
  border-radius: 16px;
  padding: 1rem;
  padding-left: 1.4rem;
  width: 120px;
  height: 120px;

  .btcdiv {
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 0;

    .icon_btc {
      background: #fff;
      border-radius: 50%;
      border: 1px solid #f7931a;
      color: #f7931a;
    }
    .icon_radio {
      color: #fcc700;
    }
  }

  .btcamt {
    p {
      color: #fff;
      font-size: 15px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      margin: 0;
    }
    h4 {
      color: #fff;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: left;
      margin: 0;
    }
  }
`;

export default CContext;
