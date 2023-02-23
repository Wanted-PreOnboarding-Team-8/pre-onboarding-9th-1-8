import React from 'react';
import { updateTodo } from '@/api/todo';
import { ITodoItem } from '@/pages/TodoPage/types';
import TodoButton from './TodoButton';

const TodoItem = ({ todo, getTodos }: ITodoItem) => {
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
        <div>
          <TodoButton
            title="수정"
            dataTestId="modify-button"
            onClick={() => alert('수정')}
          />
          <TodoButton
            title="삭제"
            dataTestId="delte-button"
            onClick={() => alert('삭제')}
          />
        </div>
      </label>
    </li>
  );
};

export default TodoItem;
