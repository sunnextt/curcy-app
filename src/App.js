import { ThemeProvider } from 'styled-components';
import Globalstyles from 'Global';
import { Switch, Route } from 'react-router-dom';

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

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Globalstyles />
      <div className="theContent">
        <Switch>
          <Route
            exact
            path="/"
            render={() => (
              <LayoutContext>
                <Home />
              </LayoutContext>
            )}
          />
          <Route
            exact
            path="/contact"
            render={() => (
              <LayoutContext>
                <Contact />
              </LayoutContext>
            )}
          />
          <Route
            exact
            path="/signin"
            render={() => (
              <LayoutContext>
                <LoginPage />
              </LayoutContext>
            )}
          />
          <Route
            exact
            path="/signup"
            render={() => (
              <LayoutContext>
                <SignUpPage />
              </LayoutContext>
            )}
          />
          <Route
            exact
            path="/forgotpassword"
            render={() => (
              <LayoutContext>
                <ForgotPasswordPage />
              </LayoutContext>
            )}
          />
          <Route
            exact
            path="/dashboard"
            render={() => (
              <DashboardLayout>
                <ForgotPasswordPage />
              </DashboardLayout>
            )}
          />
        </Switch>
      </div>
    </ThemeProvider>
  );
}

export default App;
