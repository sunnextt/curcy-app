import styled from 'styled-components';

const CContext = styled.div`
  display: flex;
  flex-direction: column;
  background: ${({ className }) => (className === 'not_selected' ? '#F6F9FF' : '#001950')};
  box-shadow: 0px 4px 20px rgba(0, 25, 80, 0.25);
  border-radius: 16px;
  padding: 1rem;
  padding-left: 1.4rem;
  border: ${({ className }) => (className === 'not_selected' ? '1px solid #c4c4c4' : '')};
  width: 120px;
  height: 120px;
  cursor: pointer;

  a {
    cursor: pointer;
  }

  .icon_btc {
    background: #fff;
    border-radius: 50%;
    border: 1px solid #f7931a;
    color: #f7931a;
    cursor: pointer;
  }

  .btcamt {
    margin-top: 1rem;
    p {
      color: ${({ className }) => (className === 'not_selected' ? '#001950' : '#fff')};
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
      color: ${({ className }) => (className === 'not_selected' ? '#001950' : '#fff')};
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

export const RadioDiv = styled.div`
  .ant-radio-wrapper {
    box-sizing: border-box;
    margin: 0;
    padding: 10px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 7px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum', 'tnum';
    position: relative;
    display: inline-flex;
    align-items: baseline;
    margin-right: 8px;
    cursor: pointer;
  }
  .ant-radio {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    font-variant: tabular-nums;
    line-height: 1.5715;
    list-style: none;
    font-feature-settings: 'tnum', 'tnum';
    position: relative;
    top: 0.2em;
    display: inline-block;
    outline: none;
    cursor: pointer;
    position: relative;
  }

  .ant-radio-input {
    position: absolute;
    top: -24px;
    left: 97px;
    bottom: 0;
    left: 26px;
    cursor: pointer;
    opacity: 0;
  }

  .ant-radio-inner {
    position: absolute;
    top: -28px;
    left: 92px;
    display: block;
    width: 24px;
    height: 24px;
    background-color: #fff;
    border-color: #d9d9d9;
    border-style: solid;
    border-width: 1px;
    border-radius: 50%;
    transition: all 0.3s;
  }

  .ant-radio-wrapper:hover .ant-radio,
  .ant-radio:hover .ant-radio-inner,
  .ant-radio-input:focus + .ant-radio-inner {
    border-color: #fcc700;
  }

  .ant-radio-checked .ant-radio-inner {
    border-color: #fcc700;
  }

  .ant-radio-inner::after {
    position: absolute;
    top: 2px;
    left: 2px;
    display: block;
    width: 18px;
    height: 18px;
    background-color: #fcc700;
    border-top: 0;
    border-left: 0;
    border-radius: 8px;
    transition: all 0.3s cubic-bezier(0.78, 0.14, 0.15, 0.86);
    content: ' ';
  }
`;

export default CContext;
