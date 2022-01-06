import React, { lazy } from 'react';
import { Switch, Route, useRouteMatch } from 'react-router-dom';

const Dashboard = lazy(() => import('../../DashboardPages/Dashboard'));

const DashboardRoutes = () => {
  const { path } = useRouteMatch();
  return (
    <Switch>
      <Route exact path={path} component={Dashboard} />
    </Switch>
  );
};

export default DashboardRoutes;
