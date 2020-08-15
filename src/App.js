import React from 'react';
import './App.css';
import { withRouter, Switch, Route } from 'react-router-dom';
import { Actions } from './components/Actions/Actions';
import { Rooms } from './components/Rooms/Rooms';
import { Header } from './components/Header/Header';

function App() {
  return (
    <div>
      <Header />
      <div className="App">
        <Switch>
          <Route exact path='/' component={Actions} />
          <Route exact path='/:action' component={Rooms} />
        </Switch>
      </div>
    </div>
  );
}

export default withRouter(App);
