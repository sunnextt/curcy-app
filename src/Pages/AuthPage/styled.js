import styled from 'styled-components';

const Container = styled.div`
  position: relative;
  padding: 3.5rem 10rem;

  @media only screen and (max-width: 756px) {
    padding: 1rem;
  }

  .signup_header {
    h2 {
      font-family: Museo Sans Rounded;
      font-style: normal;
      font-weight: 1000;
      font-size: 45px;
      line-height: 64px;
      text-align: center;
      text-transform: capitalize;
      font-feature-settings: 'pnum' on, 'lnum' on;
      color: #001950;
    }

    h6 {
      font-family: Museo Sans Rounded;
      font-size: 16px;
      font-style: normal;
      font-weight: 400;
      line-height: 28px;
      letter-spacing: 0em;
      text-align: center;
      color: #001950;
    }
  }
  .signup_button {
    margin-top: 2rem;
  }
  .already_register_link {
    margin-top: 2rem;

    p {
      font-style: normal;
      font-weight: normal;
      font-size: 16px;
      line-height: 28px;
      text-align: center;
      color: rgba(0, 25, 80, 0.6);
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

export const InputLabel = styled.label`
  color: #001950;
  font-size: 1rem;
  text-align: left;
  line-height: 24px;
  font-weight: 600;
  margin-top: 14px;
  display: block;
  width: 100%;
`;
export const Button = styled.button`
  width: fit-content;
  background-color: #001950;
  padding: 16px 60px;
  border-radius: 8px;
  color: ${({ theme }) => theme.colors.yellow[100]};
  font-weight: 400;
  font-size: 16px;
  transition: all 200ms ease;
  cursor: pointer;
  box-shadow: 0 4px 20px 0 rgba(61, 71, 82, 0.1), 0 0 0 0 rgba(0, 127, 255, 0);
  border: none;

  &:hover {
    color: ${({ theme }) => theme.colors.blue[100]};
    background-color: ${({ theme }) => theme.colors.yellow[100]};
  }
`;

export const Input = styled.input`
  margin: 1rem auto;
  width: 100%;
  padding: 10px 16px;
  line-height: 25px;
  font-size: 16px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.blue[100]};
  background: #fff;
  border: 1px solid #ccc;
  border-radius: 8px;
  flex: 0 0 auto;
  transition: border 0.3s ease;

  &::placeholder {
    color: grey;
  }
`;

export const TextField = styled.textarea`
  appearance: none;
  background: #ffffff;
  width: 100%;
  display: block;
  font-family: inherit;
  font-weight: 300;
  font-size: 1rem;
  border: 1px solid #cccccc;
  box-shadow: 0 1px 2px rgba(0, 0, 0, 0.1);
  border-radius: 8px;
  padding: 10px 16px;
  outline: none;
  margin: 1rem auto;
  resize: vertical;
  &:focus,
  &:active {
    border-color: #1e96c8;
    box-shadow: none;
  }
`;

export const InputItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  gap: 10px;

  @media only screen and (max-width: 756px) {
    flex-direction: column;
  }
`;

export const FormSignUpDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 3rem;

  .forgotpassword_link {
      display: flex;
      justify-content: flex-end;
  }
`;

export default Container;
