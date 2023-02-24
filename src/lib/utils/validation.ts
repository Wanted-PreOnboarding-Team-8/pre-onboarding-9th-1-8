import { AT, MIN_PASSWORD_LENGTH } from '@/constants/validation.constant';
//import { postSignType } from '@/api/auth/types';

export const isValidEmail = (email: string) => email.includes(AT);
export const isValidPassword = (password: string) =>
  password.length >= MIN_PASSWORD_LENGTH;
