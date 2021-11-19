import styled from 'styled-components';

export const FooterDiv = styled.footer`
position: relative;
height: 100vh;
width: 100%;
   @media (max-width: ${({ theme }) => theme.media.sm}) {
     margin: 25rem auto 0;
  }

`

export const Div = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  position: absolute;
  width: 100%;
  bottom: 0;
  left: 0;
  right:0;
  height: 70%;
  margin: 0 auto;
`


export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: absolute;
  width: 100%;
  bottom: 25%;
  left: 50%;
  transform: translate(-50%, -50%);

    @media (max-width: ${({ theme }) => theme.media.sm}) {
      position:absolute; 
      display: flex;
      flex-direction: column;
      text-align: left;
      transform: of;
      margin: 0 auto;
      width: 90%;
      bottom: 15rem;

    }
    
  @media only screen and (max-width: 756px) {
     bottom: 15rem;
    
  }
`;

export const Ul = styled.ul`
  align-items:center;
`;

export const Li = styled.li`
  display: ${({ orientation }) => (orientation === 'mobile' ? 'block' : 'inline-block')};
  ;
  ${({ orientation }) => (orientation === 'mobile' ? 'padding: .5rem 0;' : 'padding: 0 1rem;')}
  color: ${({ theme }) => theme.colors.white[100]};
  font-weight: 300;
  font-size: 16px;

      @media (max-width: ${({ theme }) => theme.media.sm}) {
      display: flex;
      flex-direction: column;
      padding: 1rem 10px;
}

`;

export const FooterBottom = styled.main`
position: absolute;
width: 90%;
margin-left: 5%;
display: flex;
flex-direction: column;
align-items: center;
bottom: 2rem;

hr {
  width: 100%;
  color: #fff;
  border: 0;
  height: 0;
  border-top: 1px solid #ccc;
  margin-bottom: 2rem;
  top: 0;
      @media (max-width: ${({ theme }) => theme.media.sm}) {
   position: absolute;
   bottom: 24rem;
  }
}

p {
  font-size: 14px;
  color: white;
  font-weight: 400;
  width: 100%;
  text-align: left;
     @media (max-width: ${({ theme }) => theme.media.sm}) {
   position: absolute;
   bottom: 30px;
  }
     @media (max-width: ${({ theme }) => theme.media.sm}) {
   position: absolute;
   bottom: 0px;
  }
}

> div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: white;

  }

   @media (max-width: ${({ theme }) => theme.media.sm}) {
   position: absolute;
   bottom: 10%;
   height:30%;
  }

`

export const SocialIcon = styled.nav`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  gap: 16px;

   @media (max-width: ${({ theme }) => theme.media.sm}) {
   position: absolute;
   top: 30px;
  }

`