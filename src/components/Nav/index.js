import { Li, Ul, NavContext } from './styled';
import propTypes from 'prop-types';
import { Link } from 'react-router-dom';


const Nav = props => {
  return (
    <NavContext>
      <Ul>
        <Li {...props}><Link to="/">Home</Link></Li>
        <Li {...props}><a href="#aboutUs">About Us</a></Li>
        <Li {...props}><a href="#faq">F.A.Q</a></Li>
        <Li {...props}><Link to="/contact">Contact Us</Link></Li>
      </Ul>
    </NavContext>
  );
};

Nav.propTypes = {
  orientation: propTypes.oneOf(['mobile', 'desktop']),
};

export default Nav;
