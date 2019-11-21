import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';


//Component Imports
import Login from './components/login';
import Register from './components/register';
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';


function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
          <Route exact path="/" component={Login}/>
          <Route path ="/register" component={Register}/>
          <Route path="/create" component={Create} />
          <Route path="/read" component={Read} />
          <Route path="/update/:id" component={Update} />
        </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
