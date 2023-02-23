import { Todo } from '@/interface/todo';

const TodoList = ({ todos }: { todos: Todo[] }) => {
  return (
    <ul>
      {todos?.map((item) => (
        <li key={item.id}>
          <label>
            <input type="checkbox" checked={item.isCompleted} />
            <span>{item.todo}</span>
          </label>
        </li>
      ))}
    </ul>
  );
};
export default TodoList;
