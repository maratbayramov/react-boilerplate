import React from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';

import './style.scss';

import Text from '../../components/text';

import HomePage from '../pages/home';
import NextPage from '../pages/next';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={HomePage} />
          <Route path="/nextpage" component={NextPage} />
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;
