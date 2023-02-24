import { todoParamTypes } from '@/api/todo/types';

//export interface ITodoForm {
//  createFn: (todo: todoParamTypes['create']) => void;
//}
//
//export interface ITodoItem {
//  updateFn: (todo: todoParamTypes['update']) => void;
//  deleteFn: (todo: todoParamTypes['delete']) => void;
//}

export type todoAPIFnTypes = {
  createFn: (todo: todoParamTypes['create']) => void;
  updateFn: (todo: todoParamTypes['update']) => void;
  deleteFn: (todo: todoParamTypes['delete']) => void;
};
