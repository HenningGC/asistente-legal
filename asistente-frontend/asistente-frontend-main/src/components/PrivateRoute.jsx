import React from 'react';
import { Outlet, Navigate } from 'react-router-dom';
import { useAuth } from '../contexts/authContext';

const PrivateRoute = () => {
    const { isAuthenticated } = useAuth();
  
    return isAuthenticated ? <Outlet /> : <Navigate to="/" />;
  };
  
  export default PrivateRoute;