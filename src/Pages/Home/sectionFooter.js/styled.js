import Row_ from 'components/Row';
import styled from 'styled-components';

export const FooterDiv = styled.div`
background: ${({ theme }) => theme.colors.blue[100]};
position: relative;
margin-top: 13rem;
height: 70vh;
padding: 1rem;

 @media (max-width: ${({ theme }) => theme.media.sm}) {
   background: ${({ theme }) => theme.colors.blue[100]};
   position:relative;
   height: 100%;
   margin: 2rem auto;
 }
    @media only screen and (min-width: 900px) {
      height: 40vh;
    }

    @media only screen and (min-width: 700px) {
      height: 40vh;
    }
`

export const Row = styled(Row_)`
  padding: 1.5rem auto;
  height: 100%;
    p {
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;


export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute;
  width: 100%;
  bottom: 70px;
  left: 50%;
  transform: translate(-50%, -50%);
  justify-content: center;
  align-items: center;
  padding: 0 5px;
  
  @media (max-width: ${({ theme }) => theme.media.sm}) {
      position:relative; 
      display: flex;
      flex-direction: column;
      text-align: left;
      transform: of;
      margin: 0 auto;
      padding: 0;
       bottom: 15rem;
      align-items: flex-start;

    }
    
`;

export const Ul = styled.ul`
  margin-bottom: 0;
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

export const FooterBottom = styled.div`
position: absolute;
width: 100%;
display: flex;
flex-direction: column;
bottom: 0px;

hr {
  width: 100%;
  color: #fff;
  border: 0;
  height: 0;
  border-top: 1px solid #ccc;
  margin-bottom: 1rem;
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
   bottom: 10rem;
  }
  
}

> div {
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  color: white;

  }

`

export const SocialIcon = styled.div`
  display: flex;
  flex-direction: row;
  font-size: 30px;
  gap: 16px;

 @media (max-width: ${({ theme }) => theme.media.sm}) {
  position: absolute;
  bottom: 17rem;
}

`