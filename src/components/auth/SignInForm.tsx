import { useCallback, useMemo, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import useInput from '@/lib/hooks/common/useInput';
import { validator } from '@/lib/utils/validator';
import authApi from '@/api/auth/auth';

const SignInForm = () => {
  const [email, isValidEmail] = useInput('', validator.email);
  const [password, isValidPw] = useInput('', validator.password);
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const isDisabled = useMemo(
    () => ![isValidEmail.value, isValidPw.value].every((valid) => valid),
    [isValidEmail.value, isValidPw.value],
  );

  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      setError('');

      const res = await authApi.signIn({
        email: email.value,
        password: password.value,
      });

      if (res?.data.message) return setError(res.data.message);

      if (res?.status === 200) {
        localStorage.setItem('token', res.data.access_token);
        return navigate('/todo');
      }
    },
    [email.value, password.value, navigate],
  );

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="email">이메일</label>
      <input id="email" type="text" data-testid="email-input" {...email} />
      <p>{isValidEmail.message}</p>
      <label htmlFor="password">비밀번호</label>
      <input
        id="password"
        type="password"
        data-testid="password-input"
        {...password}
      />
      <p>{isValidPw.message}</p>
      <p>{error}</p>
      <button data-testid="signin-button" disabled={isDisabled}>
        로그인
      </button>
      <Link to="/signup">회원가입 하러가기</Link>
    </form>
  );
};
export default SignInForm;
