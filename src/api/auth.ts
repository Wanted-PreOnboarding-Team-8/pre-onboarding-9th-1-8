import { request } from './index';

export function signup(email: string, pw: string): Promise<undefined> {
  const response = request
    .post('/auth/signup', { email: email, password: pw })
    .then((res) => res.data);
  return response;
}
