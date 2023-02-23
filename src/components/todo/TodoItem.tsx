import { ITodo, ITodoItem } from '@/pages/TodoPage/types';
import React, { useState } from 'react';

type TodoItemPropsType = {
  todo: ITodo;
  updateFn: ITodoItem['updateFn'];
};

const TodoItem = ({ todo, updateFn }: TodoItemPropsType) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);

  const onChange = (e: React.FormEvent<HTMLInputElement>) => {
    const tempState = isCompleted;
    e.preventDefault();
    setIsCompleted(!tempState);
    updateFn({
      id: todo.id,
      todo: todo.todo,
      isCompleted: !tempState,
    });
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={isCompleted} onChange={onChange} />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
