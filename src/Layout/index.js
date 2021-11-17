import { Layout } from 'antd';
import Header from './Header';
import Footer from 'Pages/Home/sectionFooter.js';

const LayoutContext = (props) => {
  return (
    <Layout>
      <Header {...props} />
      {props.children}
      <Footer />
    </Layout>
  );
};

export default LayoutContext;
