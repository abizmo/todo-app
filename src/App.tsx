import React, { useEffect, useRef, useState } from 'react';

import iconCross from './assets/images/icon-cross.svg';
import Footer from './components/Footer';
import Header from './components/Header';
import NewTodo from './components/NewTodo';

import './App.css';

type TodosType = {
  id: number;
  description: string;
  done: boolean;
};

enum FilterType {
  ALL = 'ALL',
  ACTIVE = 'ACTIVE',
  COMPLETED = 'COMPLETED',
}

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

const App = () => {
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

  const handleFilter = (typeFilter: FilterType) => {
    setFilter(typeFilter);
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
    <div className='app-container | container grid'>
      <Header />
      <main className='todo-app | grid'>
        <NewTodo onSubmit={handleSubmit} />
        <div className='todo__list'>
          <ul className='todo__list-items' role='list'>
            {todos
              .filter(FILTER_MAP[filter])
              .map(({ description, done, id }) => (
                <li key={id}>
                  <label className='todo__list-item | flex'>
                    <input
                      className='todo__list-checkbox'
                      type='checkbox'
                      checked={done}
                      onChange={() => handleChange(id)}
                    />
                    <span
                      className={`todo__list-description ${done ? 'done' : ''}`}
                    >
                      {description}
                    </span>
                    <button
                      className='button todo__close'
                      onClick={() => handleDelete(id)}
                    >
                      <img src={iconCross} alt='Delete task' />
                    </button>
                  </label>
                </li>
              ))}
          </ul>
          <div className='filter__bar | flex'>
            <span className='filter__bar-counter'>
              {todos.filter((todo) => !todo.done).length} items left
            </span>
            <div className='filters fs-300' role='tablist' aria-label='filter'>
              <button
                className={`button filters__tab ${
                  filter === FilterType.ALL ? 'active' : ''
                } | text-gray`}
                aria-selected='true'
                role='tab'
                aria-controls='todo-items'
                tabIndex={0}
                onClick={() => handleFilter(FilterType.ALL)}
              >
                All
              </button>
              <button
                className={`button filters__tab ${
                  filter === FilterType.ACTIVE ? 'active' : ''
                } | text-gray`}
                aria-selected='true'
                role='tab'
                aria-controls='todo-items'
                tabIndex={-1}
                onClick={() => handleFilter(FilterType.ACTIVE)}
              >
                Active
              </button>
              <button
                className={`button filters__tab ${
                  filter === FilterType.COMPLETED ? 'active' : ''
                } | text-gray`}
                aria-selected='true'
                role='tab'
                aria-controls='todo-items'
                tabIndex={-1}
                onClick={() => handleFilter(FilterType.COMPLETED)}
              >
                Completed
              </button>
            </div>
            <button className='filter__bar-clear button' onClick={handleClear}>
              Clear Completed
            </button>
          </div>
        </div>
        <p className='text-center fs-300 text-gray'>
          Drag and drop to reorder list
        </p>
      </main>
      <Footer
        developerName='Abián Izquierdo'
        developerUrl='https://www.abizmo.dev'
      />
    </div>
  );
};

export default App;
