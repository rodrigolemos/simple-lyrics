import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Main from './pages/Main'
import About from './pages/About';

export default class Routes extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route path="/" exact component={About} />
          <Route path="/app" component={Main} />
        </Switch>
      </BrowserRouter>
    );
  }
}
