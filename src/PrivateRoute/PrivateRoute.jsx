import React, { useContext } from 'react';
import { UserContext } from '../AuthContext/AuthContext';
import { Navigate, useLocation } from 'react-router-dom';

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, loader } = useContext(UserContext);
  if (loader) {
    return (
      <div className="text-center flex justify-center items-center h-[100vh]">
        {' '}
        <span className="loading loading-infinity loading-md"></span>
      </div>
    );
  }
  if (user) {
    return children;
  }
  return <Navigate to="/login" state={location} replace></Navigate>;
};

export default PrivateRoute;
