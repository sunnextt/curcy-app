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
`;

export const Title = styled.h4`
  font-weight: bold;
  font-size: 30px;
  line-height: 64px;
  text-align: center;
  font-feature-settings: 'salt' on, 'liga' off;
  color: #001950;
  padding: 5px 0;
`;

export default Container;
