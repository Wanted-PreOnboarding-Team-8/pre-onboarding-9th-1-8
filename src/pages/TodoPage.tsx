import { getTodos } from '@/api/todo';
import TodoAddForm from '@/components/TodoAddForm';
import TodoItem from '@/components/TodoItem';
import { Todo } from '@/interface/todo';
import React from 'react';

const TodoPage = () => {
  const [todos, setTodos] = React.useState<Todo[]>([]);

  const getTodoList = () =>
    getTodos()
      .then((res) => {
        setTodos(res.data as Todo[]);
      })
      .catch(() => alert('불러오기 실패'));

  React.useEffect(() => {
    getTodoList();
  }, []);

  return (
    <div>
      <h2>TODO LIST</h2>
      <TodoAddForm onAddTodo={getTodoList} />
      {todos.length > 0 ? (
        <ul>
          {todos.map((todo, i) => (
            <TodoItem key={i} todo={todo} />
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
