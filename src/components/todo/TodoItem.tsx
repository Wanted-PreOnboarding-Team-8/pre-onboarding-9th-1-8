import React from 'react';
import { updateTodo } from '@/api/todo';
import { ITodo, ITodoItem, TodoButtonMode } from '@/pages/TodoPage/types';
import TodoButton from './TodoButton';

const TodoItem = ({ todo, getTodos }: ITodoItem) => {
  const [inputText, setInputText] = React.useState<string>('');

  const [isModify, setIsModify] = React.useState<boolean>(false);

  const update = (item: ITodo, exitModifyMode?: boolean) => {
    updateTodo(item)
      .then(() => {
        getTodos();
        if (exitModifyMode) setIsModify(false);
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
      });
  };

  const buttonMode: TodoButtonMode = {
    default: [
      {
        title: '수정',
        dataTestId: 'modify-button',
        onClick: () => setIsModify(true),
      },
      {
        title: '삭제',
        dataTestId: 'delete-button',
        onClick: () => alert('삭제'),
      },
    ],
    modify: [
      {
        title: '제출',
        dataTestId: 'submit-button',
        onClick: () => update({ ...todo, todo: inputText }, true),
      },
      {
        title: '취소',
        dataTestId: 'cancel-button',
        onClick: () => {
          setInputText(todo.todo);
          setIsModify(false);
        },
      },
    ],
  };

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputText(e.currentTarget.value);
  };

  return (
    <li>
      <label>
        <input
          type="checkbox"
          checked={todo.isCompleted}
          onChange={() => update({ ...todo, isCompleted: !todo.isCompleted })}
        />
        {!isModify ? (
          <span>{todo.todo}</span>
        ) : (
          <input
            type="text"
            name="todo"
            value={inputText}
            onChange={onChangeInput}
            data-testid="modify-input"
          />
        )}
        <div>
          <TodoButton
            {...(!isModify ? buttonMode.default[0] : buttonMode.modify[0])}
          />
          <TodoButton
            {...(!isModify ? buttonMode.default[1] : buttonMode.modify[1])}
          />
        </div>
      </label>
    </li>
  );
};

export default TodoItem;
