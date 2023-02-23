import { createTodo, readTodo } from '@/api/todo';
import { todo as ITodo } from '@/interface/todo';
//import token from '@/lib/token';
//import { ACCESS_TOKEN_KEY } from '@/constants/token.contant';
import { useState, useEffect } from 'react';

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);
  const [newTodo, setNewTodo] = useState<string>('');
  const [isProcessing, setIsProcessing] = useState(false);

  useEffect(() => {
    fetchTodo();
  }, []);
  const onChangeNewTodoInput = (e: React.ChangeEvent<HTMLInputElement>) =>
    setNewTodo(e.target.value);

  const onCreateTodo = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!isProcessing) {
      createTodo(newTodo)
        .then(() => {
          fetchTodo();
          setIsProcessing(false);
        })
        .catch((err) => {
          alert(err.response.data.log || err.log);
          setIsProcessing(false);
        })
        .finally(() => setNewTodo(''));
    }
  };

  const fetchTodo = () => {
    readTodo()
      .then((res: any) => {
        setTodos(res.data);
      })
      .catch((err) => {
        alert(err.response.data.log || err.log);
      });
  };

  return (
    <>
      <div>
        <form onSubmit={onCreateTodo}>
          <input
            data-testid="new-todo-input"
            value={newTodo}
            onChange={onChangeNewTodoInput}
          />
          <button data-testid="new-todo-add-button">추가</button>
        </form>
      </div>
      <div>
        {todos.map((e) => {
          return (
            <li key={e.id}>
              <label>
                <input type="checkbox" checked={e.isCompleted} />
                <span>{e.todo}</span>
              </label>
              <button data-testid="modify-button">수정</button>
              <button data-testid="delete-button">삭제</button>
            </li>
          );
        })}
      </div>
    </>
  );
};

export default TodoPage;
