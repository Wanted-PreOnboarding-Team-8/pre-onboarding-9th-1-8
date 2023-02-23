import apiClient from '../apiClient';
//import { postSignParam } from './param';  // 이렇게 구분하는거도 좋고, interface에서 가져와야하지 않나 싶기도 하고;;
//import { todo } from '@/interface/todo';

export const createTodo = async (newTodo: string) => {
  return await apiClient({
    method: 'post',
    url: '/todos',
    data: {
      todo: newTodo,
    },
  });
};

export const readTodo = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};
