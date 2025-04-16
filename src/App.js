import './App.css';
import React from 'react';
import InitialPage from './pages/InitialPage';
import bolinhas from './assets/bolinhas.png';

function App () {
  return (
    <div className="App">
      <div className='gradient' id='gradientOne'></div>
      <div className='gradient' id='gradientTwo'></div>
      <img src={bolinhas} alt="bolinhas" className='bolinhas' />
      <InitialPage />
    </div>
  );
}

export default App;
