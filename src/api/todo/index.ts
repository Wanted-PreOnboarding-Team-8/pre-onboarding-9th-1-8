import apiClient from '@/api/apiClient';
import { createTodoType } from '@/api/todo/types';
import { ITodo } from '@/pages/TodoPage/types';

export const getTodo = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const createTodo = async (todo: createTodoType) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};

export const updateTodo = async (todo: ITodo) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${todo.id}`,
    data: { todo: todo.todo, isCompleted: todo.isCompleted },
  });
};

export const deleteTodo = async (id: number) => {
  return await apiClient({
    method: 'delete',
    url: `/todos/${id}`,
  });
};
