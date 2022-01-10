import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const TransactionsPageRoute = lazy(() => import('../../DashboardPages/TransactionsPage'));

const TransactionsPageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<TransactionsPageRoute />} />
    </Routes>
  );
};

export default TransactionsPageRoutes;
