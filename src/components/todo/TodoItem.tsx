import { deleteTodo, updateTodo } from '@/api/todo';
import { ITodo } from '@/pages/TodoPage/types';
import React, { useState } from 'react';

const TodoItem = ({
  todo,
  getTodos,
}: {
  todo: ITodo;
  getTodos: () => void;
}) => {
  const [isCompleted, setIsCompleted] = useState(todo.isCompleted);
  const [isModify, setIsModify] = useState(false);

  // 업데이트 상태 토글
  const toggleModify = () => {
    setIsModify((curr) => !curr);
  };

  // 업데이트 및 데이터 갱신
  const handleUpdate = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!confirm('정말 수정하시겠습니까?')) return;

    const { modifyInput } = e.target as EventTarget & {
      modifyInput: HTMLInputElement;
    };

    await updateTodo(todo.id, { todo: modifyInput.value, isCompleted });
    await getTodos();
    setIsModify(false);
  };

  // checkBox 클릭 시 isCompleted 상태만 업데이트
  const changeCompleteState = () => {
    updateTodo(todo.id, { todo: todo.todo, isCompleted: !isCompleted });
    setIsCompleted((curr) => !curr);
  };

  return (
    <li>
      {isModify ? (
        <form onSubmit={handleUpdate}>
          <input
            type="checkbox"
            checked={isCompleted}
            onChange={changeCompleteState}
          />
          <input
            name="modifyInput"
            data-testid="modify-input"
            defaultValue={todo.todo}
          />
          <button data-testid="submit-button">제출</button>
          <button data-testid="cancel-button" onClick={toggleModify}>
            취소
          </button>
        </form>
      ) : (
        <>
          <label>
            <input
              type="checkbox"
              checked={isCompleted}
              onChange={changeCompleteState}
            />
            <span>{todo.todo}</span>
          </label>
          <button data-testid="modify-button" onClick={toggleModify}>
            수정
          </button>
          <button data-testid="delete-button">삭제</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;
