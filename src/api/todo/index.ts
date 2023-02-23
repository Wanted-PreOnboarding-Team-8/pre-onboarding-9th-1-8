import apiClient from '@/api/apiClient';
import { createTodoType, updateTodoType } from '@/api/todo/types';

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

export const updateTodo = async (todo: updateTodoType) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${todo.id}`,
    data: {
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    },
  });
};
