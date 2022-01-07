import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const SellcoinsPageRoute = lazy(() => import('../../DashboardPages/SellCoinsPage'));

const SellcoinsPageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<SellcoinsPageRoute />} />
    </Routes>
  );
};

export default SellcoinsPageRoutes;
