import { URL } from '@/constants/url';
import axios from 'axios';

export const request = axios.create({
  baseURL: URL,
  headers: {
    'Content-Type': 'application/json',
  },
});
