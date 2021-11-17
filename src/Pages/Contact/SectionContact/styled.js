import styled from 'styled-components';


export const ContactSection = styled.section`
background: #F6F9FF;
height: 100vh;
 margin: 0 auto 3rem;



    @media (max-width: ${({ theme }) => theme.media.sm}) {
      height: 90vh;
      width:90%;
      position:relative;
      margin: 0 auto 10rem;

    }
    
`

export const ContactDiv = styled.div`
  color: ${({ theme }) => theme.colors.blue[100]};
h4 {
  font-weight: bold;
}

p {
  font-size: 16px;
  line-height: 28px;
  font-weight: 400;
  text-align: left;
}
`

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
`

export const InputLabel = styled.label`
    font-size: 1rem;
    text-align: left;
    line-height: 24px;
    font-weight: 600;
    margin-top: 14px;
    display: block;
    width: 100%;
`
export const Button = styled.button`
    width: fit-content;
    background-color: #001950;
    padding: 12px 32px;
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
`

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
  transition: border .3s ease;

    &::placeholder {
        color: grey;
    }
`


export const TextField = styled.textarea`
  appearance: none;
  background: #FFFFFF;
  width: 100%;
  display: block;
  font-family: inherit;
  font-weight: 300;
  font-size: 1rem;
  border: 1px solid #cccccc;
  box-shadow: 0 1px 2px rgba(0,0,0,0.1);
  border-radius: 8px;
  padding: 10px 16px;
  outline: none;
  margin: 1rem auto;
  resize: vertical;
  &:focus, &:active {
    border-color: #1e96c8;
    box-shadow: none;
  }
  `

  export const InputItem = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  text-align: left;
  gap: 10px;
  `