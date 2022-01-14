import styled from 'styled-components';

const Page404Wrapper = styled.main`
  position: absolute;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f6f9ff;

  .content {
    max-width: 600px;
    text-align: center;
  }
  h2 {
    font-size: 18vw;
    color: #001950;
    line-height: 1em;
  }
  h4 {
    margin: 1rem;
    font-family: GT Walsheim Pro;
    font-size: 24px;
    font-style: normal;
    font-weight: 500;
    line-height: 27px;
    color: #333333;
  }

  p {
    color: #001950;
    font-size: 1.2em;
  }

  a {
    font-family: GT Walsheim Pro;
  }
`;

export default Page404Wrapper;
