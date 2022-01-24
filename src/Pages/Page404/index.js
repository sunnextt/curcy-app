import Button from '../../components/Buttons/index';
import React from 'react';
import Page404Wrapper from './style';

const Page404 = () => {
  return (
    <Page404Wrapper>
      <div className="content">
        <h2>404</h2>
        <h4>Opps! Page not found</h4>
        <p>The page you were looking for doesn't exist.</p>
        <Button backgroundcolor="primary" color="secondary" href="/">
          Back To Home
        </Button>
      </div>
    </Page404Wrapper>
  );
};

export default Page404;
