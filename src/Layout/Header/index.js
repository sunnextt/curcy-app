import Nav from 'components/Nav';
import { HeaderContext } from './styled';
import Button from 'components/Buttons';

const Header = props => {
  return (
    <HeaderContext>
      <img src="/logo.png" className="logo" alt="" />
      <Nav />
      <Button type="ghost" color="primary" backgroundColor="primary">
        Sign In
      </Button>
      <Button>Get Started</Button>
    </HeaderContext>
  );
};

export default Header;
