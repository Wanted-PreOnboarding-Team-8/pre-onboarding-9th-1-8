import { addTodo } from '@/api/todo';
import React from 'react';
type Props = {
  onAddTodo: () => void;
};
const TodoAddForm = ({ onAddTodo }: Props) => {
  const [todo, setTodo] = React.useState<string>('');

  const onChangeInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTodo(e.currentTarget.value);
  };
  const onClickAddButton = (
    e: React.MouseEvent<HTMLButtonElement, MouseEvent>,
  ) => {
    e.preventDefault();
    addTodo({ todo }).then(() => {
      onAddTodo();
      setTodo('');
    });
  };

  return (
    <form>
      <input
        value={todo}
        onChange={onChangeInput}
        data-testid="new-todo-input"
      />
      <button
        type="submit"
        data-testid="new-todo-add-button"
        onClick={onClickAddButton}
      >
        추가
      </button>
    </form>
  );
};

export default TodoAddForm;
