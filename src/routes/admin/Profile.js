import React, { lazy } from 'react';
import { Routes, Route } from 'react-router-dom';

const ProfilePage = lazy(() => import('../../DashboardPages/Profile'));

const ProfilePageRoutes = () => {
  return (
    <Routes>
      <Route exact path="/" element={<ProfilePage />} />
    </Routes>
  );
};

export default ProfilePageRoutes;
