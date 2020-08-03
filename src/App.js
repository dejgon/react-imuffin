import React from 'react';
import Welcome from './pages/Welcome';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Welcome />
        <header className="header">
          <p>iMuffin<sup>&copy;</sup></p>
        </header>
      </div>
    </div>
  );
}

export default App;
