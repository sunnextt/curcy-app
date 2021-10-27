import { Layout } from 'antd';

const { Header, Footer, Content } = Layout;

const LayoutContext = props => {
  return (
    <Layout>
      <Header>Header</Header>
      <Content>{props.children}</Content>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default LayoutContext;
