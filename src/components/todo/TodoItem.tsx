import { ITodo, ITodoItem } from '@/pages/TodoPage/types';
import { useState } from 'react';
import useInputs from '@/lib/hooks/useInputs';

type TodoItemPropsType = {
  todo: ITodo;
  updateFn: ITodoItem['updateFn'];
  deleteFn: ITodoItem['deleteFn'];
};

const TodoItem = ({ todo, updateFn, deleteFn }: TodoItemPropsType) => {
  const [mode, setMode] = useState<'normal' | 'updating'>('normal');
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [updatingTodo, onChangeUpdatingTodo] = useInputs({ todo: todo.todo });

  const onChangeIsCompleted = () => {
    const tempState = isCompleted;
    setIsCompleted(!tempState);
    updateFn({
      id: todo.id,
      todo: todo.todo,
      isCompleted: !tempState,
    });
  };
  const onClickModify = () => setMode('updating');
  const onClickDelete = () => {
    deleteFn({
      id: todo.id,
    });
  };
  const onClickUpdateSubmit = () => {
    updateFn({
      ...todo,
      todo: updatingTodo.todo,
    });
    setMode('normal');
  };
  const onClickUpdateCancle = () => setMode('normal');

  let article = null;
  switch (mode) {
    case 'normal':
      article = (
        <li>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={onChangeIsCompleted}
            />
            <span>{todo.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={onClickModify}>
            수정
          </button>
          <button data-testid="delete-button" onClick={onClickDelete}>
            삭제
          </button>
        </li>
      );
      break;
    case 'updating':
      article = (
        <li>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={onChangeIsCompleted}
            />
            <input
              data-testid="modify-input"
              value={updatingTodo.todo}
              name="todo"
              onChange={onChangeUpdatingTodo}
            />
          </label>
          <button data-testid="submit-button" onClick={onClickUpdateSubmit}>
            제출
          </button>
          <button data-testid="cancel-button" onClick={onClickUpdateCancle}>
            취소
          </button>
        </li>
      );
      break;
  }

  return <div>{article}</div>;
};

export default TodoItem;
