import { signin } from '@/api/auth';
import useInput from '@/lib/hooks/useInput';
import { validate } from '@/lib/utils/validate';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Login = () => {
  const email = useInput('');
  const password = useInput('');
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const navigate = useNavigate();

  const login = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signin(email.value, password.value)
      .then((res) => {
        localStorage.setItem('login-token', res.token);
        navigate('/todo');
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div>
      <form>
        <h2>로그인</h2>
        <label>이메일</label>
        <input
          type="text"
          data-testid="email-input"
          placeholder="이메일을 입력하세요"
          {...email}
        />
        <label>패스워드</label>
        <input
          type="password"
          data-testid="password-input"
          placeholder="비밀번호를 입력하세요"
          {...password}
        />
        <span>{errorMessage}</span>
        <button
          data-testid="signin-button"
          disabled={validate({ email: email.value, password: password.value })}
          onClick={login}
        >
          로그인
        </button>
        <span>
          가입을 안하셨나요? <Link to="/signup">가입하기</Link>
        </span>
      </form>
    </div>
  );
};
export default Login;
