import { Routes, Route } from 'react-router-dom';
import AuthProvider from '../components/authProvider';
import Navigation from '../components/navigation';
import ProtectedRoute from '../components/protectedRoute';
import Classmaker from './classmaker';
import GetStarted from './get-started';
import Login from './login';

export default function App() {
  return (
    <AuthProvider>
      <Navigation />
      <Routes>
        <Route index element={<Login></Login>} />
        <Route
          path='get-started'
          element={
            <ProtectedRoute>
              <GetStarted />
            </ProtectedRoute>
          }
        />
        <Route
          path='classmaker'
          element={
            <ProtectedRoute>
              <Classmaker />
            </ProtectedRoute>
          }
        />
        <Route path='*' element={<div>404</div>} />
      </Routes>
    </AuthProvider>
  );
}
