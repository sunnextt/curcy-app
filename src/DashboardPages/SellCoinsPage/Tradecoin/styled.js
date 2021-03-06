import styled from 'styled-components';
import { Button as _Button } from 'antd';

const TradeInputWrap = styled.div`
  width: 60%;
  margin: 2rem 0;

  @media screen and (max-width: 900px) {
    width: 100%;
  }

  span {
    font-family: Museo Sans Rounded;
    font-style: normal;
    font-weight: normal;
    font-size: 10px;
    line-height: 28px;
    display: flex;
    align-items: center;
    padding-left: 5px;

    @media screen and (max-width: 600px) {
      line-height: 14px;
    }
  }
`;
export const RateXchangeDiv = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  .equal_to {
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100%;
    margin: 0;
    color: #001950;
    margin-left: -5px;
    margin-top: 2.5rem;

    @media screen and (max-width: 768px) {
      margin-left: -31px;
    }

    @media screen and (max-width: 520px) {
      display: none;
    }
  }
`;
export const Input = styled.input`
  padding: 1rem 10px;
  font-family: Museo Sans Rounded;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 17px;
  text-align: left;
  color: #050505;
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 0 8px 8px 0;

  @media screen and (max-width: 700px) {
    width: 50%;
  }
`;
export const Select = styled.select`
  font-family: Museo Sans Rounded;
  font-size: 14px;
  font-style: normal;
  font-weight: 600;
  line-height: 28px;
  text-align: left;
  color: #001950;
  padding: 0.95rem 10px;
  background: #ffffff;
  border: 1px solid #cccccc;
  border-right: none;
  box-sizing: border-box;
  border-radius: 8px 0 0 8px;
`;
export const Option = styled.option`
  padding: 1rem;
  border-radius: 0;
  border: none;
`;

export const Button = styled(_Button)`
  background: #001950;
  border-radius: 6px;
  border: none;
  height: 4rem;
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export default TradeInputWrap;
