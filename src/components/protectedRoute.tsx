import React from 'react';
import { Navigate } from 'react-router-dom';
import { useAuth } from './authProvider';

export default function ProtectedRoute({
  children,
}: {
  children: React.ReactNode;
}) {
  const { state } = useAuth();
  console.log(state?.isLoggedIn);
  // if (!state?.isLoggedIn) {
  //   return <Navigate to='/' replace />;
  // }

  return <>{children}</>;
}
