export interface createTodoType {
  todo: string;
}

export interface updateTodoType {
  id: number;
  todo: string;
  isCompleted: boolean;
}

export interface deleteTodoType {
  id: number;
}
