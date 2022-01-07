import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const DashboardPage = lazy(() => import('../../DashboardPages/Dashboard'));

const DashboardRoutes = () => {
  return (
    <Routes>
      <Route exact path="" element={<DashboardPage />} />
    </Routes>
  );
};

export default DashboardRoutes;
