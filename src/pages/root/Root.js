import React, { Fragment } from 'react';
import { Route, Switch } from 'react-router-dom';
import Login from '../../containers/login';
import App from '../app';

const Root = () => (
  <Fragment>
    <Switch>
      <Route exact from="/login" component={Login}/>
      <Route from="/" component={App}/>
    </Switch>
  </Fragment>
);

export default Root;
