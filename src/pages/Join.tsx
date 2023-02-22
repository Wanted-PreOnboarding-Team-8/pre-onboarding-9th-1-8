import React from 'react';
import { Link } from 'react-router-dom';

const Join = () => {
  return (
    <div>
      <form>
        <h2>회원가입</h2>
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
        <button data-testid="signup-button">회원가입</button>
        <span>
          로그인하러가기 <Link to="/signin">로그인</Link>
        </span>
      </form>
    </div>
  );
};

export default Join;
