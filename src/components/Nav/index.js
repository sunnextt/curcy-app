import { Li, Ul, NavContext } from './styled';

const Nav = () => {
  return (
    <NavContext>
      <Ul>
        <Li>Home</Li>
        <Li>About Us</Li>
        <Li>F.A.Q</Li>
        <Li>Contact Us</Li>
      </Ul>
    </NavContext>
  );
};

export default Nav;
