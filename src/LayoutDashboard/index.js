import Footer from './Footer';
import React from 'react';
import Header from './Header';
import Layout, { ContentContent } from './styled';

const DashboardLayout = ({ children }) => {
  return (
    <Layout>
      <Header />
      <ContentContent>{children}</ContentContent>
      <Footer />
    </Layout>
  );
};

export default DashboardLayout;
