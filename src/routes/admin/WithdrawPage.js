import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const WithdrawPage = lazy(() => import('../../DashboardPages/WithdrawPage'));

const WithdrawPageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<WithdrawPage />} />
    </Routes>
  );
};

export default WithdrawPageRoutes;
