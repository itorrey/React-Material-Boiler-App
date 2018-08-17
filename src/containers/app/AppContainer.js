import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import AppBar from './AppBar';
import AppNavigation from './AppNavigation';
import AppContent from './AppContent';
import DefaultTheme from '../../themes/default';
import AppSettings from './AppSettings';
import {
  toggleNav,
  toggleSettings,
} from '../../domains/app/app.actions';
import {
  authenticateRemove,
} from '../../domains/authentication/authentication.actions';
import './app.style.scss';

class AppContainer extends React.Component {
  render() {
    return (
      <main className="c-app">
        <AppBar
          onNavToggle={() => {this.props.toggleNav(!this.props.isNavOpen);}}
          onSettingsToggle={() => { this.props.toggleSettings(!this.props.isSettingsOpen);}}
        />
        <AppNavigation
          onSelect={(location) => {
            this.props.history.push(location);
          }}
          open={this.props.isNavOpen}
        />
        <DefaultTheme>
          <AppContent>
            <AppSettings
              open={this.props.isSettingsOpen}
              onClose={() => {this.props.toggleSettings(false);}}
              onLogout={() => {
                this.props.authenticateRemove();
                this.props.history.push('/login');
              }}
              goTo={(location) => {
                this.props.history.push('/settings/' + location);
              }}
            />
            {this.props.children}
          </AppContent>
        </DefaultTheme>
      </main>
    );
  }
}

AppContainer.propTypes = {
  history: PropTypes.object,
  children: PropTypes.element,
  authenticateRemove: PropTypes.func,
  hasAuthenticated: PropTypes.bool,
  isNavOpen: PropTypes.bool,
  isSettingsOpen: PropTypes.bool,
  toggleNav: PropTypes.func,
  toggleSettings: PropTypes.func,
};

const mapStateToProps = state => ({
  hasAuthenticated: state.authentication.hasAuthenticated,
  isNavOpen: state.app.isNavOpen,
  isSettingsOpen: state.app.isSettingsOpen,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  toggleNav,
  toggleSettings,
  authenticateRemove,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(AppContainer);
