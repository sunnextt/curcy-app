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
    border-top: 3px solid #cccccc;
    margin: 4rem 0;
  }
  .step_two {
  }
  .card_div {
    display: flex;
    flex-wrap: wrap;
    gap: 1rem;
  }

  .btn_div {
    display: flex;
    gap: 1.5rem;
    margin: 3rem 0;

    h6 {
      font-family: Museo Sans Rounded;
      font-size: 16px;
      font-style: normal;
      font-weight: 600;
      line-height: 32px;
      color: #fcc700;
      letter-spacing: 0.4px;
      margin: 0;
    }

    p {
      font-size: 10px;
      line-height: 15px;
      display: flex;
      align-items: center;
      color: #001950;
      width: 50%;
    }
  }

  @media screen and (max-width: 600px) {
padding: 2rem;
}
`;

export default SellcoinsContainer;
