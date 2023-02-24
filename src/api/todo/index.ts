import apiClient from '@/api/apiClient';
import { todoParamTypes } from '@/api/todo/types';

export const getTodo = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};

export const createTodo = async (todo: todoParamTypes['create']) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo,
    },
  });
};

export const updateTodo = async (todo: todoParamTypes['update']) => {
  return await apiClient({
    method: 'put',
    url: `/todos/${todo.id}`,
    data: {
      todo: todo.todo,
      isCompleted: todo.isCompleted,
    },
  });
};

export const deleteTodo = async (todo: todoParamTypes['delete']) => {
  return await apiClient({
    method: 'delete',
    url: `/todos/${todo.id}`,
  });
};
