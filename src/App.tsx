import React from 'react';

import './App.css';
import { Footer, Header, Todos } from './components';

const App = () => {
  return (
    <div className='app-container | container grid'>
      <Header />
      <main>
        <Todos />
      </main>
      <Footer
        developerName='Abián Izquierdo'
        developerUrl='https://www.abizmo.dev'
      />
    </div>
  );
};

export default App;
