import useInput from '@/lib/hooks/useInput';
import { validate } from '@/lib/utils/validate';
import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  const email = useInput('');
  const password = useInput('');

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
        <button
          data-testid="signin-button"
          disabled={validate({ email: email.value, password: password.value })}
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