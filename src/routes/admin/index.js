import React from 'react';
import { Routes, Route, useResolvedPath } from 'react-router-dom';
import SellcoinsPageRoutes from './SellcoinsRoute';
import DashboardRoutes from './dashboard';
import WithdrawPageRoutes from './WithdrawPage';
import ProfilePageRoutes from './Profile';
import TradeHistoryRoutes from './Trade';
import TransactionsPageRoutes from './Transactions';

const Admin = () => {
  let path = useResolvedPath('').pathname;
  console.log('x:', path);
  console.log(`${path}/sellcoins`);

  return (
    <Routes>
      <Route path="/" element={<DashboardRoutes />} />
      <Route path="sellcoins" element={<SellcoinsPageRoutes />} />
      <Route path="withdraws" element={<WithdrawPageRoutes />} />
      <Route path="profile" element={<ProfilePageRoutes />} />
      <Route path="trades" element={<TradeHistoryRoutes />} />
      <Route path="transactions" element={<TransactionsPageRoutes />} />
    </Routes>
  );
};

export default Admin;
