import { signin } from '@/api/auth';
import SignForm from '@/components/SignForm';
import { LOGIN_TOKEN } from '@/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const navigate = useNavigate();

  React.useEffect(() => {
    const loginToken = localStorage.getItem(LOGIN_TOKEN);
    if (loginToken) {
      navigate('/todo');
    }
  }, [navigate]);

  const login = (email: string, password: string) => {
    signin(email, password)
      .then((res) => {
        localStorage.setItem(LOGIN_TOKEN, res.token);
        navigate('/todo');
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div>
      <h2>로그인</h2>
      <SignForm
        type="login"
        errorMessage={errorMessage}
        buttonId="signin-button"
        onClickButton={login}
      />
    </div>
  );
};
export default Login;
