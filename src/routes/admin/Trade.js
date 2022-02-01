
import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const TradeHistory = lazy(() => import('../../DashboardPages/TradesPage'));

const TradeHistoryRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<TradeHistory />} />
    </Routes>
  );
};

export default TradeHistoryRoutes;