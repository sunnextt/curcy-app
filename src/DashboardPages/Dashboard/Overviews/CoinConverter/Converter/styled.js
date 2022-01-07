import styled from 'styled-components';

const ConverterWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 2.3rem 0;

  .converter_input {
    select {
      width: 50%;
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 28px;
      align-items: center;
      color: #001950;
      border: none;
      padding: 14px 5px;
      border-radius: 8px 0 0 8px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    }
    input {
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 28px;
      color: #001950;
      background: #ffffff;
      border: none;
      box-sizing: border-box;
      border-radius: 0 8px 8px 0;
      border-left: 1px solid #d5d5d5;
      width: 40%;
      padding: 12px 0 12px 12px;
      box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    }
  }

  .converter_output {
    background: #ffffff;
    border: 1px solid #cccccc;
    box-sizing: border-box;
    border-radius: 8px;
    padding: 10px 0 3px 10px;
    border: none;
    box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
    h6 {
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 28px;
      display: flex;
      align-items: center;

      color: #0a8425;
    }
  }

  .equal_to {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    color: #001950;
    margin-left: -5px;
  }
`;

export default ConverterWrap;
