import styled from 'styled-components';

const NotificationWrapper = styled.div`
  padding: 2rem 0;
  .notification_contents {
    position: relative;
    width: 50%;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 10px;
    background: #ffffff;
    border-radius: 6px;
    padding: 1rem 2rem;
    margin: 1rem 0;

    @media screen and (max-width: 768px) {
      width: 100%;
    }

    span {
      position: absolute;
      right: 1rem;
    }
  }

  .notification_text_content {
    h5 {
      font-weight: 600;
      font-size: 16px;
      line-height: 16px;
      letter-spacing: -0.28px;
      color: #001950;
      margin-bottom: 1rem;
    }

    h6 {
      font-weight: normal;
      font-size: 14px;
      line-height: 12px;
      letter-spacing: -0.28px;
      color: #000000;
      mix-blend-mode: normal;
      opacity: 0.8;
    }
  }
`;

export default NotificationWrapper;
