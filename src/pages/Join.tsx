import { signup } from '@/api/auth';
import useInput from '@/lib/hooks/useInput';
import { validate } from '@/lib/utils/validate';
import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Join = () => {
  const email = useInput('');
  const password = useInput('');
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const navigate = useNavigate();

  const join = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    signup(email.value, password.value)
      .then(() => {
        navigate('/signin');
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div>
      <form>
        <h2>회원가입</h2>
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
          data-testid="signup-button"
          disabled={validate({ email: email.value, password: password.value })}
          onClick={join}
        >
          회원가입
        </button>
        <span>
          로그인하러가기 <Link to="/signin">로그인</Link>
        </span>
      </form>
    </div>
  );
};

export default Join;
