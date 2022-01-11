import styled from 'styled-components';

const WithdrawPageWrapper = styled.section`
  background: #f6f9ff;
  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 2rem 3rem;

  .currency_name {
    background: #ffffff;
    border: 1px solid #cccccc;
    border-right: none;
    border-radius: 8px 0 0 8px;
    padding: 6px;

    @media screen and (max-width: 768px) {
      width: 24%;
      padding: 0.95rem 1rem 0.95rem 1.5rem;
    }
    @media screen and (max-width: 900px) and (min-width: 768px) {
      padding: 10px;
    }
    @media screen and (max-width: 1200px) and (min-width: 900px) {
      padding: 7.8px;
    }
    h6 {
      font-family: Museo Sans Rounded;
      font-size: 17px;
      768font-style: normal;
      font-weight: 400;
      letter-spacing: 0em;
      text-align: left;
      margin: 0;
    }
  }

  .info_msg {
    display: flex;
    gap: 10px;
    width: 60%;
    margin: 3rem 0 2rem;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    h6 {
      margin: 0;
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: normal;
      font-size: 13px;
      line-height: 18px;
      display: flex;
      align-items: center;
      color: #001950;
    }
  }
`;

export const VerticalBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  margin-bottom: 2rem;
`;

export const FlexRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;
export const FlexRowC = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const Form = styled.form``;

export const Input = styled.input`
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 8px;
  width: ${props => props.width};
  padding: 10px;
  appearance: none;
  outline: 0;
  font-family: Museo Sans Rounded;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #050505;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const CNInput = styled.input`
  background: #ffffff;
  border: 1px solid #cccccc;
  box-sizing: border-box;
  border-radius: 0 8px 8px 0;
  width: ${props => props.width};
  padding: 10px;
  appearance: none;
  outline: 0;
  font-family: Museo Sans Rounded;
  font-style: normal;
  font-weight: normal;
  font-size: 17px;
  line-height: 20px;
  display: flex;
  align-items: center;
  color: #050505;
  @media screen and (max-width: 768px) {
    width: 80%;
  }
`;

export const Label = styled.label`
  font-family: Museo Sans Rounded;
  margin-bottom: 1rem;
  font-weight: 600;
  font-style: normal;
  font-weight: 600;
  font-size: 17px;
  line-height: 24px;
`;

export const Button = styled.button`
  font-family: Museo Sans Rounded;
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 32px;
  color: #fcc700;
  background: #001950;
  border-radius: 8px;
  padding: 10px 26px;
  width: 25%;
  cursor: pointer;
  outline: none;
  transition: all 0.4s ease;
  user-select: none;

  &:hover {
    background: #001940;
    color: #ffffff;
    cursor: pointer;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;
export const Select = styled.select``;

export default WithdrawPageWrapper;
