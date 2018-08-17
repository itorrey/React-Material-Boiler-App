import React from 'react';
import PropTypes from 'prop-types';
import { Route, Switch } from 'react-router-dom';
import AppContainer from '../../containers/app';
import DashboardContainer from '../../containers/dashboard';
import InventoryContainer from '../../containers/inventory';

class Routes extends React.Component {
  render() {
    return (
      <AppContainer history={this.props.history}>
        <Switch>
          <Route exact from="/" component={DashboardContainer} />
          <Route exact from="/inventory" component={InventoryContainer} />
        </Switch>
      </AppContainer>
    );
  }
}

Routes.propTypes = {
  history: PropTypes.object,
};

export default Routes;
