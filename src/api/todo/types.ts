import { ITodo } from '@/interface';

export type todoParamTypes = {
  create: Pick<ITodo, 'todo'>;
  update: Pick<ITodo, 'id' | 'todo' | 'isCompleted'>;
  delete: Pick<ITodo, 'id'>;
};
