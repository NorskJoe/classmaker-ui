import { Routes, Route } from 'react-router-dom';
import AuthProvider from '../components/authProvider';
import Header from '../components/header';
import ProtectedRoute from '../components/protectedRoute';
import GetStarted from './get-started';
import Home from './home';
import Login from './login';
import '../styles/global.scss';

export function App() {
  return (
    <AuthProvider>
      <Header />

      <Routes>
        <Route index element={<Login></Login>} />
        <Route
          path="get-started"
          element={
            <ProtectedRoute>
              <GetStarted />
            </ProtectedRoute>
          }
        />
        <Route
          path="home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        <Route path="*" element={<div>404</div>} />
      </Routes>
    </AuthProvider>
  );
}
