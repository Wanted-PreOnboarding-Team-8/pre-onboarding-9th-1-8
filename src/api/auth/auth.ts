import { UserFormData } from '@/interface/auth';
import { AxiosError } from 'axios';
import { axiosInstance } from './client';

const authApi = {
  signUp: async (loginData: UserFormData) => {
    try {
      return await axiosInstance.post('/auth/signup', loginData);
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.response;
      }
    }
  },

  signIn: async (loginData: UserFormData) => {
    try {
      return await axiosInstance.post('/auth/signin', loginData);
    } catch (error) {
      if (error instanceof AxiosError) {
        if (error.response?.status === 401) {
          return {
            ...error.response,
            data: { message: '비밀번호 또는 아이디가 틀렸습니다.' },
          };
        } else {
          return error.response;
        }
      }
    }
  },
};

export default authApi;
