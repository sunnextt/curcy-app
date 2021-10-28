import { Li, Ul, NavContext } from './styled';
import propTypes from 'prop-types';

const Nav = props => {
  return (
    <NavContext>
      <Ul>
        <Li {...props}>Home</Li>
        <Li {...props}>About Us</Li>
        <Li {...props}>F.A.Q</Li>
        <Li {...props}>Contact Us</Li>
      </Ul>
    </NavContext>
  );
};

Nav.propTypes = {
  orientation: propTypes.oneOf(['mobile', 'desktop']),
};

export default Nav;
