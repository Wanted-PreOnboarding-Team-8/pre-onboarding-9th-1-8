import axios from 'axios';

const TODO_BASE_URL = 'https://pre-onboarding-selection-task.shop/';

export const axiosInstance = axios.create({
  baseURL: TODO_BASE_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
