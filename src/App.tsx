import React from 'react';

import './App.css';
import { Footer, Header, TodoApp } from './components';

const App = () => {
  return (
    <div className='app-container | container grid'>
      <Header />
      <main>
        <TodoApp />
      </main>
      <Footer
        developerName='Abián Izquierdo'
        developerUrl='https://www.abizmo.dev'
      />
    </div>
  );
};

export default App;
