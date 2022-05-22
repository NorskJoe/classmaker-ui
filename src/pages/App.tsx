import { Routes, Route } from 'react-router-dom';
import AuthProvider from '../components/authProvider';
import ProtectedRoute from '../components/protectedRoute';
import Home from './home';
import Login from './login';
import '../styles/global.scss';

export function App() {
  return (
    <AuthProvider>
      <Routes>
        <Route index element={<Login></Login>} />
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
