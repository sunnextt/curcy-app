import Nav from 'components/Nav';
import { HeaderContext } from './styled';

const Header = () => {
  return (
    <HeaderContext>
      <img src="/logo.png" className="logo" alt="" />
      <Nav />
    </HeaderContext>
  );
};

export default Header;
