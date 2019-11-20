import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

//Component Imports
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';


function App() {
  return (
    <BrowserRouter>
      <Switch>
        <h1>DEBUG - App.js COMPONENT</h1>
        <Route path="/create" component={Create} />
        <Route path="/read" component={Read} />
        <Route path="/update" component={Update} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
