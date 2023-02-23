import { getTodos } from '@/api/todo';
import { Todo } from '@/interface/todo';
import React from 'react';

const TodoPage = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  React.useEffect(() => {
    getTodos()
      .then((res) => {
        setTodos(res.data as Todo[]);
      })
      .catch(() => alert('불러오기 실패'));
  }, []);

  return (
    <div>
      <h2>TODO LIST</h2>

      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, i) => (
            <li key={i}>{todo.todo}</li>
          ))}
        </ul>
      ) : (
        <div>
          <span>목록 없음</span>
          <span>TODO 아이템을 추가해주세요!</span>
        </div>
      )}
    </div>
  );
};

export default TodoPage;
