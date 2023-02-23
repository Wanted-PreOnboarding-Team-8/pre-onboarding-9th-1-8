import { ITodoButton } from '@/pages/TodoPage/types';
import React from 'react';

const TodoButton = ({ title, dataTestId, onClick }: ITodoButton) => {
  return (
    <button data-testid={dataTestId} onClick={onClick}>
      {title}
    </button>
  );
};

export default TodoButton;
