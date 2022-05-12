import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../components/authProvider';
import { LoginFormData } from '../models/login.data';
import { userService } from '../services/user.service';

export default function Login() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<LoginFormData>();
  const navigate = useNavigate();
  const { state, setState } = useAuth();

  if (state?.isLoggedIn) {
    navigate('/classmaker');
  }

  async function handleLogin({
    username,
    password,
  }: {
    username: string;
    password: string;
  }): Promise<void> {
    await userService.login(username, password).then((token) => {
      setState({
        token: token,
        isLoggedIn: true,
      });
      navigate('/classmaker');
    });
  }

  return (
    <div className='TODO_Login'>
      <form onSubmit={handleSubmit(handleLogin)}>
        <input
          type='text'
          placeholder='Username'
          {...register('username', { required: true })}
        ></input>
        {/* TODO: Add error wrapper */}
        {errors.username && 'Username is required'}
        <input
          type='password'
          placeholder='Password'
          {...register('password', { required: true })}
        ></input>
        {/* TODO: Add error wrapper */}
        {errors.password && 'Password is required'}
        <button>Submit</button>
      </form>
    </div>
  );
}
