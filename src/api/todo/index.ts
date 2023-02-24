import apiClient from '@/api/apiClient';
import { updateTodoType } from './types';

export const getTodo = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const createTodo = async (todo: string) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};

export const updateTodo = async ({ todo, id, isCompleted }: updateTodoType) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${id}`,
    data: {
      todo,
      isCompleted,
    },
  });
};

export const deleteTodo = async (id: number) => {
  return await apiClient({
    method: 'delete',
    url: `/todos/${id}`,
  });
};
