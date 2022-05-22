import { Button } from 'react-bootstrap';
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
    <div>
      <Button variant="outline-info" type="button">
        <img
          src="/icons/question-square.svg"
          alt="icon"
          height="18px"
          width="18px"
        />
        How To
      </Button>
      <Button variant="secondary" type="button" onClick={handleLogout}>
        Sign Out
      </Button>
    </div>
  );
}
