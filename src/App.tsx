import React from 'react';

import './App.css';

const App = () => (
  <>
    <header>
      <h1>Todo</h1>
      <div>theme button</div>
    </header>
    <main>
      <p>Create a new todo</p>
      <ul>
        <li>First task</li>
        <li>Second task</li>
        <li>Last task</li>
      </ul>
      <p>5 items left</p>
      <p>All</p>
      <p>Active</p>
      <p>Completed</p>
      <p>Clear Completed</p>
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
