import { createTodo, getTodo, updateTodo, deleteTodo } from '@/api/todo';
import {
  createTodoType,
  updateTodoType,
  deleteTodoType,
} from '@/api/todo/types';
import TodoForm from '@/components/todo/TodoForm';
import TodoItem from '@/components/todo/TodoItem';
import { ITodo } from '@/pages/TodoPage/types';
import { useCallback, useEffect, useState } from 'react';

const TodoPage = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const getTodos = useCallback(() => {
    getTodo()
      .then((res) => setTodos(res.data))
      .catch((err) => alert(err.response.data.log || err.log));
  }, []);

  const onSubmit = (todo: createTodoType) => {
    createTodo(todo)
      .then(() => getTodos())
      .catch((err) => alert(err.response.data.log || err.log));
  };

  const onUpdate = (todo: updateTodoType) => {
    updateTodo(todo)
      .then(() => getTodos())
      .catch((err) => alert(err.response.data.log || err.log));
  };

  const onDelete = (todo: deleteTodoType) => {
    deleteTodo(todo)
      .then(() => getTodos())
      .catch((err) => alert(err.response.data.log || err.log));
  };

  useEffect(() => {
    getTodos();
  }, []); //  useCallback으로 만든 함수는 무시 가능
  return (
    <div>
      <TodoForm submitFn={onSubmit} />
      <ul>
        {todos.map((todo) => {
          return (
            <TodoItem
              key={todo.id}
              todo={todo}
              updateFn={onUpdate}
              deleteFn={onDelete}
            />
          );
        })}
      </ul>
    </div>
  );
};

export default TodoPage;
