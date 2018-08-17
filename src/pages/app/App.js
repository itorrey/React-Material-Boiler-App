import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Routes from './Routes';
import Authenticate from '../../containers/authenticate';

const App = () => {
  return (
    <Authenticate>
      <Switch>
        <Route from="/" component={Routes} />
      </Switch>
    </Authenticate>
  );
};

export default App;
