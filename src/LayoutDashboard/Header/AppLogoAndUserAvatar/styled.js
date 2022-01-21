import styled from 'styled-components';
import { Row as _Row } from 'antd';

export const Row = styled(_Row)`
  padding: 1rem 7.5rem;
  margin: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;

  @media screen and (max-width: 768px) {
    padding: 1rem 2rem;
  }

  img {
    width: 145.41px;
    height: 36.12px;
    @media screen and (max-width: 768x) {
      width: 100px;
      height: 25px;
    }
  }

  .menu-icon {
    margin-left: auto;
  }

  h6 {
    font-family: Museo Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: right;
    color: #001950;
    margin: 0px;
  }

  .bell_notification {
    background-color: #002f71;
    padding: 5px;
    border-radius: 50%;
  }

  .user_avatar {
    border: 3px solid #f0bd22;
    cursor: pointer;
  }
  .avatar_div {
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
  }
`;

export const ContentDiv = styled.div`
  .content_username {
    margin: 1rem;
  }

  h6 {
    font-family: Museo Sans;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: right;
    color: #001950;
    margin: 0px;
  }

  button {
    color: #001950;
    margin-bottom: 10px;
  }
`;
