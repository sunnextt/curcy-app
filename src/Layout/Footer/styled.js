import styled from 'styled-components';


export const FooterNavDiv = styled.div`
  background-color: ${({ theme }) => theme.colors.blue[100]};
  border: none;
  position: absolute;
  bottom: 0;
  height: 60%;
  width: 100%;

    @media only screen and (max-width: 600px) {
   height: 100%;
   position: relative;
   } 
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
      position:relative; 
      display: flex;
      flex-direction: column;
      text-align: left;
      padding: 1rem 0;
      left: auto;
      bottom: auto;
      margin: 3rem auto;
      width: 90%;
      transform: none;
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


 @media (max-width: ${({ theme }) => theme.media.sm}) {
   position: relative;
   margin: 5% auto;
   bottom: auto;
   height: 100%;
  }

  > div {

   @media (max-width: ${({ theme }) => theme.media.sm}) {
     flex-direction: column;
     height: 120px;
  }

  }

hr {
  width: 100%;
  color: #fff;
  border: 0;
  height: 0;
  border-top: 1px solid #ccc;
  margin-bottom: 2rem;
  top: 0;
   @media (max-width: ${({ theme }) => theme.media.sm}) {
   position: relative;
   top: auto;
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
   bottom: 0px;
  }
}

`

export const SocialIcon = styled.nav`
color: white;
  display: flex;
  flex-direction: row;
  font-size: 30px;
  gap: 16px;

   @media (max-width: ${({ theme }) => theme.media.sm}) {
   position: absolute;
   top: 3rem;
  }

`