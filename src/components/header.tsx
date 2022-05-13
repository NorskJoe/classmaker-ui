import { NavLink } from 'react-router-dom';
import { useAuth } from './authProvider';

export default function Header() {
  const { state, setState } = useAuth();

  function handleLogout() {
    setState({
      isLoggedIn: false,
      token: undefined,
    });
  }

  // Do not display if not logged in
  if (!state?.isLoggedIn) {
    return <></>;
  }

  return (
    <nav>
      <NavLink to="/get-started">Get Started</NavLink>
      <button>Upload</button>
      {state?.isLoggedIn && (
        <button type="button" onClick={handleLogout}>
          Sign Out
        </button>
      )}
    </nav>
  );
}
