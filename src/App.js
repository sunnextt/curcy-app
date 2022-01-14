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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <div className="theContent">
        <Routes>
          <Route
            path="/"
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
            path="/signin"
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
                  <Admin />
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
