import styled from 'styled-components';
import { Row as _Row } from 'antd';

export const Row = styled(_Row)`
  padding: 1rem 7.5rem;
  position: relative;
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
    position: absolute;
    right: 5px;
  }

  h6 {
    font-family: Museo Sans Rounded;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: right;
    color: #001950;
    margin: 0px;
    text-transform: capitalize;
  }

  .bell_notification {
    background-color: #002f71;
    padding: 5px;
    border-radius: 50%;
  }

  .user_avatar {
    border: 3px solid #f0bd22;
    cursor: pointer;
    position: relative;
  }
  .avatar_div {
    display: flex;
    column-gap: 1rem;
    justify-content: center;
    align-items: center;
    @media screen and (max-width: 600px) {
      font-size: 10px;
      margin-right: 10px;
    }
  }
`;

export const ContentDiv = styled.div`
  .content_username {
    margin: 1rem;
  }

  h6 {
    font-family: Museo Sans Rounded;
    font-size: 14px;
    font-style: normal;
    font-weight: 400;
    line-height: 20px;
    letter-spacing: 0px;
    text-align: right;
    color: #001950;
    margin: 0px;
    text-transform: capitalize;
  }

  button {
    color: #001950;
    margin-bottom: 10px;
  }

  .ant-popover {
    position: fixed;
  }
`;
