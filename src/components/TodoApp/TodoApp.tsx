import React, { useEffect, useState } from 'react';
import { FilterType, TodosType } from '../../models';

import { NewTodo } from '../NewTodo';
import { Todo } from '../Todo';
import { TodosFilters } from '../TodosFilters';

const FILTER_MAP = {
  ALL: () => true,
  ACTIVE: (todo: TodosType) => !todo.done,
  COMPLETED: (todo: TodosType) => todo.done,
};

const initialTodos = [
  {
    id: 1,
    description: 'Complete online JavaScript course',
    done: true,
  },
  {
    id: 2,
    description: 'Jog around the park 3x',
    done: false,
  },
  {
    id: 3,
    description: '10 minutes meditation',
    done: false,
  },
  {
    id: 4,
    description: 'Read for 1 hour',
    done: false,
  },
  {
    id: 5,
    description: 'Pick up groceries',
    done: false,
  },
  {
    id: 6,
    description: 'Complete Todo App on Fronted Mentor',
    done: false,
  },
];

const TodoApp = () => {
  const [todos, setTodos] = useState<TodosType[]>([]);
  const [filter, setFilter] = useState<FilterType>(FilterType.ALL);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  const handleDelete = (todoId: number) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.id !== todoId));
  };

  const handleChange = (todoId: number) => {
    setTodos((prevTodos) =>
      prevTodos.map((todo) =>
        todo.id === todoId ? { ...todo, done: !todo.done } : todo
      )
    );
  };

  const handleClear = () => {
    setTodos((prevTodos) => prevTodos.filter((todo) => !todo.done));
  };

  const handleSubmit = (description: string) => {
    setTodos((prevTodos) => {
      const newTodos = [
        ...prevTodos,
        {
          id: new Date().getTime(),
          description,
          done: false,
        },
      ];

      return newTodos;
    });
  };

  return (
    <div className='todos__container | grid'>
      <NewTodo onSubmit={handleSubmit} />
      <div className='todos'>
        <ul className='todos__list' role='list'>
          {todos.filter(FILTER_MAP[filter]).map(({ description, done, id }) => (
            <li key={id}>
              <Todo
                todoId={id}
                description={description}
                done={done}
                id={`todo#${id}`}
                onCheck={handleChange}
                onDelete={handleDelete}
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
          <button className='todos__footer-clear button' onClick={handleClear}>
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
