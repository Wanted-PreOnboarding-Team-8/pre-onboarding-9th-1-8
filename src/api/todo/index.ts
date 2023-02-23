import apiClient from '../apiClient';
import { creteTodoParam } from './param';

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
