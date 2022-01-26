import React, { Suspense } from 'react';
import { Spin } from 'antd';
import { ThemeProvider } from 'styled-components';
import Globalstyles from 'Global';
import { Route, Routes } from 'react-router-dom';

// layouts

// pages
import Home from 'Pages/Home';
import Contact from 'Pages/Contact';

import theme from 'theme';
import './App.css';
import LayoutContext from './Layout';
import LoginPage from 'Pages/AuthPage/LoginPage';
import SignUpPage from 'Pages/AuthPage/SignUpPage';
import ForgotPasswordPage from 'Pages/AuthPage/ForgotPasswordPage';
import DashboardLayout from 'LayoutDashboard';
import Admin from 'routes/admin';
import Page404 from 'Pages/Page404';
import RequireAuth from 'utilities/requireAuth';
import ResetPasswordPage from 'Pages/AuthPage/ResetPassword';
import { useDispatch } from 'react-redux';
import { getTrade, getTransaction } from 'redux/slice/tradeDataSlice';
import RequireToken from 'utilities/requireToken';
import { getBankName } from 'redux/actions/DataAction';

function App() {
  const dispatch = useDispatch();
  const yes = true;

  React.useEffect(() => {
    dispatch(getTransaction({ yes }));
    dispatch(getTrade({ yes }));
    dispatch(getBankName());
  }, [dispatch, yes]);

  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <div className="theContent">
        <Routes>
          <Route
            path=""
            element={
              <LayoutContext>
                <Home />
              </LayoutContext>
            }
          />
          <Route
            exact
            path="/contact"
            element={
              <LayoutContext>
                <Contact />{' '}
              </LayoutContext>
            }
          />
          <Route
            exact
            path="/login"
            element={
              <LayoutContext>
                <LoginPage />
              </LayoutContext>
            }
          />
          <Route
            exact
            path="/signup"
            element={
              <LayoutContext>
                <SignUpPage />
              </LayoutContext>
            }
          />
          <Route
            exact
            path="passwordreset"
            element={
              <LayoutContext>
                <RequireToken>
                  <ResetPasswordPage />
                </RequireToken>
              </LayoutContext>
            }
          />
          <Route
            exact
            path="/forgotpassword"
            element={
              <LayoutContext>
                <ForgotPasswordPage />
              </LayoutContext>
            }
          />
          <Route path="*" element={<Page404 />} />
          <Route
            path="/admin/*"
            element={
              <DashboardLayout>
                <Suspense
                  fallback={
                    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <Spin />
                    </div>
                  }
                >
                  <RequireAuth>
                    <Admin />
                  </RequireAuth>
                </Suspense>
              </DashboardLayout>
            }
          />
        </Routes>
      </div>
    </ThemeProvider>
  );
}

export default App;
