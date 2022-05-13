import { Alert, Button, Form } from 'react-bootstrap';
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
    // Validation
    await userService.login(username, password).then((token) => {
      setState({
        token: token,
        isLoggedIn: true,
      });
      navigate('/classmaker');
    });
  }

  return (
    <div className="TODO_Login">
      <h1>Welcome to Classmaker</h1>
      <Alert variant="primary">
        To sign up, send an email to joe.johnson3909@gmail.com
      </Alert>
      <Form noValidate onSubmit={handleSubmit(handleLogin)}>
        <Form.Group className="mb-3">
          <Form.Control
            type="text"
            placeholder="Username"
            {...register('username', { required: true })}
            isInvalid={!!errors.username}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Username is required
          </Form.Control.Feedback>
        </Form.Group>
        <Form.Group className="mb-3">
          <Form.Control
            type="password"
            placeholder="Password"
            {...register('password', { required: true })}
            isInvalid={!!errors.password}
          ></Form.Control>
          <Form.Control.Feedback type="invalid">
            Password is required
          </Form.Control.Feedback>
        </Form.Group>
        <Button variant="primary" type="submit">
          Submit
        </Button>
      </Form>
    </div>
  );
}
