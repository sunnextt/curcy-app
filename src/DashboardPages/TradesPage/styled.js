import styled from 'styled-components';

const Container = styled.main`
  background: #f6f9ff;
  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 2rem 3rem;
`;

export const HeaderContent = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1rem;

  .search_refresh_div {
    display: flex;
    align-items: center;
    gap: 1.5em;
  }
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 30px;
  /* line-height: 64px; */
  text-align: center;
  font-feature-settings: 'salt' on, 'liga' off;
  color: #001950;
  margin: 0;
`;

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
  color: #050505;
`;

export default Container;
