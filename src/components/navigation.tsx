import { NavLink } from 'react-router-dom';
import { useAuth } from './authProvider';

export default function Navigation() {
  const { state, setState } = useAuth();

  function handleLogout() {
    setState({
      isLoggedIn: false,
      token: undefined,
    });
  }

  return (
    <nav>
      <NavLink to='/get-started'>Get Started</NavLink>
      <NavLink to='/classmaker'>Classmaker</NavLink>
      {state?.isLoggedIn && (
        <button type='button' onClick={handleLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
}
