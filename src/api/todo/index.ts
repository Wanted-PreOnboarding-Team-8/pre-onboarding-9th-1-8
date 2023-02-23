import apiClient from '../apiClient';

export const getTodos = async () => {
  return await apiClient({
    method: 'get',
    url: '/todos',
  });
};
