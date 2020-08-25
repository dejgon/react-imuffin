import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Welcome from './pages/Welcome';
import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Profile from './pages/Profile';
import './App.css';

function App() {
  return (
    <div className="App">
      <div className="App-header">
      <Router>
        <Switch>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/recipes">
            <Recipes />
          </Route>
          <Route path="/profile">
            <Profile />
          </Route>
          <Route path="/">
            <Welcome />
          </Route>
        </Switch>
      </Router>
      </div>
    </div>
  );
}

export default App;
