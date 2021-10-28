import Nav from 'components/Nav';
import { HeaderContext } from './styled';
import Button from 'components/Buttons';
import { CgMenuRight } from 'react-icons/cg';

const Header = props => {
  return (
    <HeaderContext>
      <img src="/logo.png" className="logo" alt="" />
      {window.innerWidth > 756 ? (
        <>
          <Nav />
          <div className="button-group">
            <Button type="ghost" color="primary" _backgroundColor="primary">
              Sign In
            </Button>
            <Button>Get Started</Button>
          </div>
        </>
      ) : (
        <CgMenuRight />
      )}
    </HeaderContext>
  );
};

export default Header;
