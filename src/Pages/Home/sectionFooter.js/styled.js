import Row_ from 'components/Row';
import styled from 'styled-components';

export const FooterDiv = styled.div`
position: relative;
margin-top: 10rem;
`

export const Row = styled(Row_)`
  background: ${({ theme }) => theme.colors.blue[100]};
  padding: 1.5rem auto;
  height: 70vh;
    p {
    color: ${({ theme }) => theme.colors.white[100]};
  }
`;

export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  position: absolute;
  top: 70%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  padding: 0 5px;
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
`;

export const FooterBottom = styled.div`
position: absolute;
bottom: 0;
width: 100%;
display: flex;
flex-direction: column;
align-items: center;
border-top: 1px solid #ccc;

hr {
  width: 100%;
  color: #fff;
  border: 0;
  height: 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  margin-bottom: 1rem;
}

p {
  font-size: 14px;
  color: white;
  font-weight: 400;
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
`