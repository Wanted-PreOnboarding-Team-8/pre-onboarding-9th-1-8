import { Todo } from '@/interface/todo';
import React from 'react';

type Props = {
  todo: Todo;
};

const TodoItem = ({ todo }: Props) => {
  const [isChecked, setIsChecked] = React.useState<boolean>(todo.isCompleted);

  const onCheck = () => {
    setIsChecked(!isChecked);
  };

  return (
    <li>
      <label>
        <input type="checkbox" checked={isChecked} onChange={onCheck} />
        <span>{todo.todo}</span>
      </label>
    </li>
  );
};

export default TodoItem;
