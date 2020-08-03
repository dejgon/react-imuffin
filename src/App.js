import React from 'react';
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
        <Welcome />
        <Home />
        {/* <header className="header">
          <p>iMuffin<sup>&copy;</sup></p>
        </header> */}
      </div>
    </div>
  );
}

export default App;
