import { LOGIN_TOKEN } from '@/constants';
import React from 'react';
import { useNavigate } from 'react-router';

const Todo = () => {
  const navigate = useNavigate();

  React.useEffect(() => {
    const token = localStorage.getItem(LOGIN_TOKEN);
    if (token) {
      // get todo
    } else {
      navigate('/signin');
    }
  }, [navigate]);

  return <>Todo</>;
};

export default Todo;
