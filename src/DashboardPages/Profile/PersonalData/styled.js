import styled from 'styled-components';

const ParsonalDataWrapper = styled.div`
  margin: 2rem 0;
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
  justify-content: center;
`;

export const FlexCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
`;

export default ParsonalDataWrapper;
