import { creteTodoParam } from '@/interface/todo';
import apiClient from '../apiClient';

export const getTodos = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const addTodo = async ({ todo }: creteTodoParam) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};
