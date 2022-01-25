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
  cursor: pointer;

  a {
    cursor: pointer;
  }

  .btcdiv {
    display: flex;
    justify-content: space-between;
    margin: 0 0 10px 0;
    cursor: pointer;

    .icon_btc {
      background: #fff;
      border-radius: 50%;
      border: 1px solid #f7931a;
      color: #f7931a;
      cursor: pointer;
    }
    .icon_radio {
      color: ${props => props.inputColor || 'palevioletred'};
      cursor: pointer;
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
      cursor: pointer;
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
      cursor: pointer;
    }
  }

  [type='radio'] {
    position: absolute;
    opacity: 0;
    width: 0;
    height: 0;
    cursor: pointer;
  }

  /* IMAGE STYLES */
  [type='radio'] + img {
    cursor: pointer;
  }

  /* CHECKED STYLES */
  [type='radio']:checked + img {
    outline: 2px solid #f00;
    cursor: pointer;
  }
`;

export default CContext;
