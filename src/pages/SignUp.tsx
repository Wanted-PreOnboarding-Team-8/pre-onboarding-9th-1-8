import SignUpForm from '@/components/auth/SignUpForm';
import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const SignUp = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      navigate('/todo');
    }
  }, [navigate]);

  return (
    <main>
      <SignUpForm />
    </main>
  );
};
export default SignUp;
