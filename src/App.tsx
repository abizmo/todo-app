import React, { useState } from 'react';

import iconCross from './assets/images/icon-cross.svg';
import iconMoon from './assets/images/icon-moon.svg';
import iconSun from './assets/images/icon-sun.svg';

import './App.css';

const initialTodos = [
  {
    description: 'Complete online JavaScript course',
    done: true,
  },
  {
    description: 'Jog around the park 3x',
    done: false,
  },
  {
    description: '10 minutes meditation',
    done: false,
  },
  {
    description: 'Read for 1 hour',
    done: false,
  },
  {
    description: 'Pick up groceries',
    done: false,
  },
  {
    description: 'Complete Todo App on Fronted Mentor',
    done: false,
  },
];

const App = () => {
  const [theme, setTheme] = useState('dark');
  const [todos, setTodos] = useState(initialTodos);

  const handleSubmit = (evt: React.SyntheticEvent) => {
    evt.preventDefault();
    const target = evt.target as typeof evt.target & {
      todo: { value: String };
    };
    console.log('[Todo Submitted]:', target.todo.value);
    target.todo.value = '';
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
            />
          </label>
        </form>
        <div>
          <ul className='todo-items' role='list'>
            {todos.map(({ description, done }, index) => (
              <li key={index}>
                <label className='todo-item | flex'>
                  <input
                    className='todo-item--checkbox'
                    type='checkbox'
                    checked={done}
                  />
                  <span
                    className={`todo-item--text ${done ? 'done' : ''} | fs-200`}
                  >
                    {description}
                  </span>
                  <button>
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
