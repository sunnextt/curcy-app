import React from 'react';
import useQuery from 'utilities/useQuery';
const { useLocation, Navigate } = require('react-router-dom');

function RequireToken({ children }) {
  let query = useQuery();

  let location = useLocation();
  const token = query.get('token');

  console.log(token);

  if (!token) {
    // Redirect them to the /login page, but save the current location they were
    // trying to go to when they were redirected. This allows us to send them
    // along to that page after they login, which is a nicer user experience
    // than dropping them off on the home page.
    return <Navigate to="/forgotpassword" state={{ from: location }} replace />;
  }
  return children;
}

export default RequireToken;
