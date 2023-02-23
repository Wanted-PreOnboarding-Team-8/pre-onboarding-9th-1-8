import useInput from '@/lib/hooks/common/useInput';
import { validator } from '@/lib/utils/validator';
import { Link } from 'react-router-dom';

const SignInForm = () => {
  const [email, isValidEmail] = useInput('', validator.email);
  const [password, isValidPw] = useInput('', validator.password);

  return (
    <form>
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
      <button data-testid="signin-button">로그인</button>
      <Link to="/signup">회원가입 하러가기</Link>
    </form>
  );
};
export default SignInForm;
