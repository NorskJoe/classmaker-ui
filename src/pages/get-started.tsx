import { useAuth } from '../components/authProvider';

export default function GetStarted() {
  const { state } = useAuth();
  return (
    <>
      <h2>Get Started</h2>
      <div>TODO: Instructions on how to use the app</div>
    </>
  );
}
