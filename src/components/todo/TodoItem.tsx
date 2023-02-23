import React from 'react';
import { updateTodo } from '@/api/todo';
import { TodoItemProps } from '@/pages/TodoPage/types';

const TodoItem = ({ todo, getTodos }: TodoItemProps) => {
  const onChangeCheckBox = () => {
    updateTodo({
      ...todo,
      isCompleted: !todo.isCompleted,
    }).then(() => {
      getTodos();
    });
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={onChangeCheckBox}
        />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
