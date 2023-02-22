import useInput from '@/lib/hooks/useInput';
import { validate } from '@/lib/utils/validate';
import { Link } from 'react-router-dom';

type Props = {
  type: 'login' | 'join';
  errorMessage: string;
  buttonId: string;
  onClickButton: (email: string, password: string) => void;
};

const SignForm = ({ type, errorMessage, buttonId, onClickButton }: Props) => {
  const email = useInput('');
  const password = useInput('');

  const contents =
    type === 'login'
      ? {
          title: '로그인',
          suggest: '가입을 안하셨나요?',
          linkText: '회원가입',
          linkTo: '/signup',
        }
      : {
          title: '회원가입',
          suggest: '계정이 있으신가요?',
          linkText: '로그인',
          linkTo: '/signin',
        };

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    onClickButton(email.value, password.value);
  };

  return (
    <form>
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
        data-testid={buttonId}
        disabled={validate({ email: email.value, password: password.value })}
        onClick={onClick}
      >
        {contents.title}
      </button>
      <span>
        {contents.suggest} <Link to={contents.linkTo}>{contents.linkText}</Link>
      </span>
    </form>
  );
};

export default SignForm;
