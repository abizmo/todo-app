import { todos } from '@/fixtures';
import { TodosType } from '@/models';

const DELAY_MS = 200;

export const getTodos = async (): Promise<TodosType[]> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve(todos), DELAY_MS);
  });
};
