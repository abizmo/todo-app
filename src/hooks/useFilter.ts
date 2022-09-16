import { useState } from 'react';

import { FilterType, TodosType } from '@/models';

export const useFilter = () => {
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);

  const FILTER_MAP = {
    ALL: () => true,
    ACTIVE: (todo: TodosType) => !todo.done,
    COMPLETED: (todo: TodosType) => todo.done,
  };

  const filtered = (todos: TodosType[]) => todos.filter(FILTER_MAP[filter]);

  return { filter, changeFilter: setFilter, filtered };
};
