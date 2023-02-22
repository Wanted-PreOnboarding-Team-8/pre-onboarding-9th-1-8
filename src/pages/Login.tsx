import React from 'react';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div>
      <form>
        <h2>로그인</h2>
        <label>이메일</label>
        <input
          type="email"
          data-testid="email-input"
          placeholder="이메일을 입력하세요"
        />
        <label>패스워드</label>
        <input
          type="password"
          data-testid="password-input"
          placeholder="비밀번호를 입력하세요"
        />
        <button data-testid="signin-button">로그인</button>
        <span>
          가입을 안하셨나요? <Link to="/signup">가입하기</Link>
        </span>
      </form>
    </div>
  );
};
export default Login;
