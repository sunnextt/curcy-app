import { Layout } from 'antd';

import Header from './Header';

const { Content } = Layout;

const LayoutContext = props => {
  return (
    <Layout>
      <Header />
      <Content>{props.children}</Content>
    </Layout>
  );
};

export default LayoutContext;
