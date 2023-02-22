import { signup } from '@/api/auth';
import SignForm from '@/components/SignForm';
import { LOGIN_TOKEN } from '@/constants';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const Join = () => {
  const [errorMessage, setErrorMessage] = React.useState<string>('');

  const navigate = useNavigate();

  React.useEffect(() => {
    const loginToken = localStorage.getItem(LOGIN_TOKEN);
    if (loginToken) {
      navigate('/todo');
    }
  }, [navigate]);

  const join = (email: string, password: string) => {
    signup(email, password)
      .then(() => {
        navigate('/signin');
      })
      .catch((error) => {
        setErrorMessage(error.response.data.message);
      });
  };

  return (
    <div>
      <h2>회원가입</h2>
      <SignForm
        type="join"
        buttonId="signup-button"
        errorMessage={errorMessage}
        onClickButton={join}
      />
    </div>
  );
};

export default Join;
