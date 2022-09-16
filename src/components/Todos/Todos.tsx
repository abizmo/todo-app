import React, { useState } from 'react';

import { useTodos } from '../../hooks';
import { FilterType, TodosType } from '../../models';

import { NewTodo, Todo, TodosFilters } from './components';

const FILTER_MAP = {
  ALL: () => true,
  ACTIVE: (todo: TodosType) => !todo.done,
  COMPLETED: (todo: TodosType) => todo.done,
};

export const TodoApp = () => {
  const { todos, addTodo, deleteTodo, clearCompleteTodos, toggleTodo } =
    useTodos();
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);

  const todosCount = todos.filter((todo) => !todo.done).length;

  return (
    <div className='todos__container | grid'>
      <NewTodo onSubmit={addTodo} />
      <div className='todos'>
        <ul className='todos__list' role='list'>
          {todos.filter(FILTER_MAP[filter]).map(({ description, done, id }) => (
            <li key={id}>
              <Todo
                todoId={id}
                description={description}
                done={done}
                id={`todo#${id}`}
                onCheck={toggleTodo}
                onDelete={deleteTodo}
              />
            </li>
          ))}
        </ul>
        <div className='todos__footer | flex'>
          <span className='todos__counter'>{todosCount} items left</span>
          <TodosFilters
            selected={filter}
            onFilterBy={(newFilter) => setFilter(newFilter)}
          />
          <button
            className='todos__footer-clear button'
            onClick={clearCompleteTodos}
          >
            Clear Completed
          </button>
        </div>
      </div>
      <p className='text-center fs-300 text-gray'>
        Drag and drop to reorder list
      </p>
    </div>
  );
};
