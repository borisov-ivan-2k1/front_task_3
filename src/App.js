import React from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Actions } from './components/Actions/Actions';

function App() {
  return (
    <div className="App">
      <Switch>
          <Route exact path='/' component={Actions}/>
      </Switch>
    </div>
  );
}

export default withRouter(App);
