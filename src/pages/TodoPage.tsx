import { useState, useEffect, useCallback } from 'react';
import { getTodoList } from '@/api/todo';
import { Todo } from '@/interface/todo';
import { createTodo } from '@/api/todo';
import TodoList from '@/components/todo/TodoList';
import useInputs from '@/lib/hooks/useInputs';

const TodoPage = () => {
  const [newTodo, onChangeNewTodo] = useInputs({ todo: '' });
  const [todos, setTodos] = useState<Todo[]>([]);

  // 투두 불러오기
  const getTodos = useCallback(async () => {
    const { data } = await getTodoList();
    setTodos(data);
  }, []);

  useEffect(() => {
    getTodos();
  }, []);

  // 투두 생성 함수
  const handleSubmit = useCallback(
    async (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault();
      try {
        await createTodo({ todo: newTodo.todo });
        await getTodos();
      } catch (error) {
        alert('Todo 생성에 실패하였습니다.');
      }
    },
    [newTodo],
  );

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="todo"
          value={newTodo.todo}
          onChange={onChangeNewTodo}
          data-testid="new-todo-input"
        />
        <button data-testid="new-todo-add-button">생성</button>
      </form>
      <TodoList todos={todos} />
    </main>
  );
};

export default TodoPage;
