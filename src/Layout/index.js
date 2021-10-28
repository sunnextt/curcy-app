import { Layout } from 'antd';
import Header from './Header';
import Home from 'Pages/Home';

const LayoutContext = props => {
  return (
    <Layout>
      <Header />
      <Home />
    </Layout>
  );
};

export default LayoutContext;
