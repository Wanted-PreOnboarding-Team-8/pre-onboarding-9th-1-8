import useInput from '@/lib/hooks/useInput';
import { validate } from '@/lib/utils/validate';
import React from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  const email = useInput('');
  const password = useInput('');

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
        <button
          data-testid="signup-button"
          disabled={validate({ email: email.value, password: password.value })}
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
