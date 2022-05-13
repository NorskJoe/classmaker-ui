import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authProvider';

export default function Home() {
  const { state } = useAuth();
  const navigate = useNavigate();

  const hasData = false;
  /* TODO: Check if classes exist
   * if (exist) { render classes }
   * else { render getting started }
   */
  if (!hasData) {
    navigate('/get-started');
  }

  return (
    <>
      <h2>Classmaker</h2>
      <div>Token: {state?.token}</div>
    </>
  );
}
