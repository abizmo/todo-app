import React from 'react';

import { Footer, Header, Todos } from './components';
import './App.css';

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
