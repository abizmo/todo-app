import React, { useEffect, useState } from 'react';

import iconCross from './assets/images/icon-cross.svg';
import iconMoon from './assets/images/icon-moon.svg';
import iconSun from './assets/images/icon-sun.svg';

import './App.css';

type TodosType = {
  id: number;
  description: string;
  done: boolean;
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
  const [theme, setTheme] = useState('dark');
  const [newTodo, setNewTodo] = useState('');
  const [todos, setTodos] = useState<TodosType[]>([]);

  useEffect(() => {
    setTodos(initialTodos);
  }, []);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    if (newTodo.trim() === '') return;

    setTodos((prevTodos) => {
      const newTodos = [
        ...prevTodos,
        {
          id: new Date().getTime(),
          description: newTodo,
          done: false,
        },
      ];
      setNewTodo('');
      return newTodos;
    });
  };

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

  return (
    <div className='container'>
      <header className='flex app-header'>
        <h1 className='text-white fs-900 fw-bold lh-heading ls-900 uppercase'>
          Todo
        </h1>
        <button className='button'>
          <img
            src={theme === 'dark' ? iconSun : iconMoon}
            alt=''
            aria-hidden='true'
          />
          <span className='visually-hidden'>Change theme</span>
        </button>
      </header>
      <main className='todo-app | grid'>
        <form onSubmit={handleSubmit}>
          <label className='add-todo | flex'>
            <input className='add-todo--checkbox' disabled type='checkbox' />
            <input
              id='todo'
              className='add-todo--text | fs-200'
              type='text'
              placeholder='Create a new todo...'
              value={newTodo}
              onChange={({ target }) => setNewTodo(target.value)}
            />
          </label>
        </form>
        <div className='todo-items'>
          <ul role='list'>
            {todos.map(({ description, done, id }) => (
              <li key={id}>
                <label className='todo-item | flex'>
                  <input
                    className='todo-item--checkbox'
                    type='checkbox'
                    checked={done}
                    onChange={() => handleChange(id)}
                  />
                  <span
                    className={`todo-item--text ${done ? 'done' : ''} | fs-200`}
                  >
                    {description}
                  </span>
                  <button className='button' onClick={() => handleDelete(id)}>
                    <img src={iconCross} alt='Delete task' />
                  </button>
                </label>
              </li>
            ))}
          </ul>
          <div className='flex'>
            <span>5 items left</span>
            <div className='filter-list' role='tablist' aria-label='filter'>
              <button
                aria-selected='true'
                role='tab'
                aria-controls='todo-items'
                tabIndex={0}
              >
                All
              </button>
              <button
                aria-selected='true'
                role='tab'
                aria-controls='todo-items'
                tabIndex={-1}
              >
                Active
              </button>
              <button
                aria-selected='true'
                role='tab'
                aria-controls='todo-items'
                tabIndex={-1}
              >
                Completed
              </button>
            </div>
            <span>Clear Completed</span>
          </div>
        </div>
        <p className='text-center'>Drag and drop to reorder list</p>
      </main>
      <footer className='attribution | text-center'>
        Challenge by{' '}
        <a
          href='https://www.frontendmentor.io?ref=challenge'
          target='_blank'
          rel='noreferrer noopener'
        >
          Frontend Mentor
        </a>
        . Coded by <a href='https://www.abizmo.dev'>Abián Izquierdo</a>.
      </footer>
    </div>
  );
};

export default App;
