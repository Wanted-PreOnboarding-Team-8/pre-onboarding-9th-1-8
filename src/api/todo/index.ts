import apiClient from '../apiClient';
import { createTodoParam, getTodoListReturn } from './param';

export const createTodo = async ({ todo }: createTodoParam) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};

export const getTodoList = async (): Promise<getTodoListReturn> => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};
