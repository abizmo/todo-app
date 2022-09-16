import React from 'react';

import { useFilter, useTodos } from '../../hooks';

import { NewTodo, Todo, TodosFilters } from './components';
import styled from './Todos.module.css';

const {
  appContainer,
  todosList,
  todosContainer,
  todosFooter,
  todosFooterClear,
} = styled;

export const Todos = () => {
  const { todos, addTodo, deleteTodo, clearCompleteTodos, toggleTodo } =
    useTodos();
  const { filter, changeFilter, filtered } = useFilter();

  const todosCount = todos.filter((todo) => !todo.done).length;

  return (
    <div className={`${appContainer} | grid`}>
      <NewTodo onSubmit={addTodo} />
      <div className={todosContainer}>
        <ul className={todosList} role='list'>
          {filtered(todos).map(({ description, done, id }) => (
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
        <div className={`${todosFooter} | flex`}>
          <span>{todosCount} items left</span>
          <TodosFilters selected={filter} onFilterBy={changeFilter} />
          <button
            className={`${todosFooterClear} button`}
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
