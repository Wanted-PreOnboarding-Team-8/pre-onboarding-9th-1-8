import SignInForm from '@/components/auth/SignInForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignIn = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  return (
    <main>
      <SignInForm />
    </main>
  );
};
export default SignIn;
