import styled from 'styled-components';

const ProfilePageWrap = styled.main`
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

export default ProfilePageWrap;
