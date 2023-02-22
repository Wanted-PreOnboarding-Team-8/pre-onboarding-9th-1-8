import { LoginResponse } from '@/interface/auth';
import { request } from './index';

export function signup(email: string, pw: string): Promise<undefined> {
  const response = request
    .post('/auth/signup', { email: email, password: pw })
    .then((res) => res.data);
  return response;
}

export const signin = (email: string, pw: string): Promise<LoginResponse> => {
  const response = request
    .post('/auth/signin', { email: email, password: pw })
    .then((res) => ({ token: res.data.access_token }));
  return response;
};
