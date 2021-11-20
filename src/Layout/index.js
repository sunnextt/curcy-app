import { Layout } from 'antd';
import Header from './Header';
import FooterWrapper from 'Layout/sectionFooter.js/index.js';

const LayoutContext = (props) => {
  return (
    <Layout>
      <Header {...props} />
      {props.children}
      <FooterWrapper />
    </Layout>
  );
};

export default LayoutContext;
