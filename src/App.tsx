import React from 'react';

import iconCross from './assets/images/icon-cross.svg';
import iconMoon from './assets/images/icon-moon.svg';
import iconSun from './assets/images/icon-sun.svg';

import './App.css';

const App = () => (
  <>
    <header className='flex app-header'>
      <h1>Todo</h1>
      <button className='theme-toggle'>
        <img className='' src={iconSun} alt='' aria-hidden='true' />
        <img className='' src={iconMoon} alt='' aria-hidden='true' />
        <span className='visually-hidden'>Change theme</span>
      </button>
    </header>
    <main>
      <form action=''>
        <label>
          <input type='checkbox' />
          <span className='checkmark'></span>
          <input type='text' placeholder='Create a new todo...' />
        </label>
      </form>
      <div>
        <ul className='todo-items' role='list'>
          <li>
            <label>
              <input type='checkbox' />
              <span className='checkmark'></span>
              <span>Complete online JavaScript course</span>
              <button>
                <img src={iconCross} alt='Delete task' />
              </button>
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' />
              <span className='checkmark'></span>
              <span>Jog aroung the park 3x</span>
              <button>
                <img src={iconCross} alt='Delete task' />
              </button>
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' />
              <span className='checkmark'></span>
              <span>10 minutes meditation</span>
              <button>
                <img src={iconCross} alt='Delete task' />
              </button>
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' />
              <span className='checkmark'></span>
              <span>Read for 1 hour</span>
              <button>
                <img src={iconCross} alt='Delete task' />
              </button>
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' />
              <span className='checkmark'></span>
              <span>Pick up groceries</span>
              <button>
                <img src={iconCross} alt='Delete task' />
              </button>
            </label>
          </li>
          <li>
            <label>
              <input type='checkbox' />
              <span className='checkmark'></span>
              <span>Complete Todo App on Frontend Mentor</span>
              <button>
                <img src={iconCross} alt='Delete task' />
              </button>
            </label>
          </li>
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
      <p>Drag and drop to reorder list</p>
    </main>
    <footer className='attribution'>
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
  </>
);

export default App;
