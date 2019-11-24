import React from 'react';
import './App.css';
import { Switch, Route, BrowserRouter } from 'react-router-dom';

//Component Imports
import Create from './components/create';
import Read from './components/read';
import Update from './components/update';
import CreateAssessment from './components/createAssessment';

function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Switch>
          <Route exact path="/" component={Read}/>
          <Route path="/create" component={Create} />
          <Route path="/update/:id" component={Update} />
          <Route path="/createAssessment/:id" component={CreateAssessment}/>
        </Switch>
    </div>

    </BrowserRouter>
  );
}

export default App;
