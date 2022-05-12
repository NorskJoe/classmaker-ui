import { useAuth } from '../components/authProvider';

export default function Classmaker() {
  const { state } = useAuth();
  return (
    <>
      <h2>Classmaker</h2>
      <div>Token: {state?.token}</div>
    </>
  );
}
