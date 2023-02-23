import { VALIDATE_PATTERN, ValidationError } from '@/constants/validation';

export const validator = {
  email: (value: string) => {
    const result = VALIDATE_PATTERN.EMAIL.test(value);
    return {
      value: result,
      message: result ? '' : ValidationError.EMAIL_ERROR,
    };
  },
  password: (value: string) => {
    const result = value.length >= 8;
    return {
      value: result,
      message: result ? '' : ValidationError.PASSWORD_ERROR,
    };
  },
};
