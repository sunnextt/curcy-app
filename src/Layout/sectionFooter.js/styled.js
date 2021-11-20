import styled from 'styled-components';


export const FooterDiv = styled.div`
display: flex;
justify-content: center;
align-items: center;
position: relative;
width: 100%;
height: 100vh;

   @media (max-width: ${({ theme }) => theme.media.sm}) {
     height: '100%';
     flex-direction: column;
  }

  @media only screen and (max-width: 600px) {
    height: 100%;
     width: '100%';
  }
`

