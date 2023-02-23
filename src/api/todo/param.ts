import { Todo } from '@/interface/todo';

export interface createTodoParam {
  todo: string;
}

export interface getTodoListReturn {
  data: Todo[];
}
