import styled from 'styled-components';

const ProfilePageWrap = styled.main`
  width: 100%;
  height: 100vh;
  background: #f6f9ff;
  border: 1px solid #979797;
  box-sizing: border-box;
  border-radius: 16px;
  padding: 2rem 3rem;

  .tab_list {
    border-bottom: 3px solid #e0dfdf;
  }

  .custom_typo {
    font-family: Museo Sans Rounded;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    line-height: 24px;
    text-transform: uppercase;
    color: #001950;
    margin: 0;
  }

  .react-tabs__tab {
    display: inline-block;
    border: 1px solid transparent;
    border-bottom: none;
    bottom: -1px;
    position: relative;
    list-style: none;
    padding: 6px 0;
    margin: 0 5rem 0 0;
    cursor: pointer;
  }

  .react-tabs__tab--selected {
    border-radius: 0;
    border-bottom: 3px solid #001950;
  }
`;
export const Title = styled.h4`
  font-weight: bold;
  font-size: 30px;
  font-feature-settings: 'salt' on, 'liga' off;
  color: #001950;
`;
export default ProfilePageWrap;
