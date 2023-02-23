import useInputs from '@/lib/hooks/useInputs';
import React from 'react';

const TodoAddForm = () => {
  const [todoData, onChangeTodoData] = useInputs({
    todo: '',
  });

  const onClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
  };

  return (
    <form>
      <input
        name="todo"
        value={todoData.todo}
        onChange={onChangeTodoData}
        data-testid="new-todo-input"
      />
      <button type="submit" data-testid="new-todo-add-button" onClick={onClick}>
        추가
      </button>
    </form>
  );
};

export default TodoAddForm;
