import styled from 'styled-components';

const ModalContent = styled.div`
  padding: 2rem aut0;

  form {
    width: '100%';
    font-size: 1.2rem;
    input {
      font-size: 1.2rem;
      color: black;
    }
  }
  .amount_withdral_div {
    padding: 0 1rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    h5 {
      font-size: 2rem;
      font-style: normal;
      font-weight: 600;
      letter-spacing: 0em;
      text-align: center;
      margin: 0;
      padding: 0;
    }

    h6 {
      font-weight: normal;
      font-size: 13px;
      line-height: 15px;
      text-align: center;
      color: #828282;
    }
  }

  input {
    color: #828282;
    padding: 1rem;
    font-size: 1rem;
  }

  select {
    padding: 1rem;
  }

  .withdraw_button {
    margin: 2rem 0 0 0;
  }
  .margin {
    margin: 1rem auto;
  }
`;

export default ModalContent;
