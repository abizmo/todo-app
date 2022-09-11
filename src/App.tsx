import React, { useEffect, useRef, useState } from 'react';

import Footer from './components/Footer';
import Header from './components/Header';
import TodoApp from './components/TodoApp';

import './App.css';

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
