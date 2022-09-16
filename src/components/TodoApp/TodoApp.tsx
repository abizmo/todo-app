import React, { useState } from 'react';
import { useTodos } from '../../hooks';
import { FilterType, TodosType } from '../../models';

import { NewTodo } from '../NewTodo';
import { Todo } from '../Todo';
import { TodosFilters } from '../TodosFilters';

const FILTER_MAP = {
  ALL: () => true,
  ACTIVE: (todo: TodosType) => !todo.done,
  COMPLETED: (todo: TodosType) => todo.done,
};

const TodoApp = () => {
  const { todos, addTodo, deleteTodo, clearCompleteTodos, toggleTodo } =
    useTodos();
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);

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
          <span className='todos__counter'>
            {todos.filter((todo) => !todo.done).length} items left
          </span>
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

export default TodoApp;
