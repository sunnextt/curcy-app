import Nav from 'components/Nav';
import { HeaderContext } from './styled';
import Button from 'components/Buttons';

const Header = props => {
  return (
    <HeaderContext>
      <img src="/logo.png" className="logo" alt="" />
      <Nav />
      <div className="button-group">
        <Button type="ghost" color="primary" _backgroundColor="primary">
          Sign In
        </Button>
        <Button>Get Started</Button>
      </div>
    </HeaderContext>
  );
};

export default Header;
