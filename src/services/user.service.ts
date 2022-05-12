import { BehaviorSubject } from 'rxjs';
import { Result } from '../models/result.model';

const userSubject = new BehaviorSubject(localStorage.getItem('user') || null);

export const userService = {
  user: userSubject.asObservable(),
  get userValue() {
    debugger;
    return userSubject.value;
  },
  login,
  logout,
};

async function login(username: string, password: string): Promise<string> {
  const requestOptions = {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ORIGIN: '*' },
    body: JSON.stringify({ username, password }),
  };

  const response = await fetch(
    'https://localhost:44341/user/login',
    requestOptions
  );
  return await handleResponse(response);
}

function logout() {
  localStorage.removeItem('token');
  userSubject.next(null);
}

async function handleResponse(response: Response): Promise<any> {
  const text = await response.text();
  const data: Result = text && JSON.parse(text);

  if (!response.ok || !data.isSuccess) {
    if ([401, 403].includes(response.status) && userService.userValue) {
      userService.logout();
    }

    const error = data.errors || response.statusText;
    return Promise.reject(error);
  }
  return data.value;
}
