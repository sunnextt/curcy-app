import styled from 'styled-components';

const SellcoinsContainer = styled.div`
  background: #f6f9ff;
  border: none;
  border: 1px solid #979797;
  border-radius: 16px;
  padding: 2rem 3rem;

  h3 {
    font-style: normal;
    font-weight: bold;
    font-size: 30px;
    line-height: 64px;
    font-feature-settings: 'salt' on, 'liga' off;
    color: #001950;
  }
  h5 {
    font-style: normal;
    font-weight: 600;
    font-size: 20px;
    line-height: 32px;
    color: #000000;
  }
  h6 {
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 28px;
    color: #001950;
  }
  p {
    font-style: normal;
    font-weight: 300;
    font-size: 16px;
    line-height: 28px;
    color: #001950;
  }
  .step_one {
  }
  .divider {
    margin: 3rem;
  }
  .step_two {
  }
  .card_div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }
`;

export default SellcoinsContainer;
