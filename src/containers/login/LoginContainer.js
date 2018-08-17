import React from 'react';
import PropTypes from 'prop-types';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import LoginForm from './LoginForm';
import LoginMain from './LoginMain';
import DarkTheme from '../../themes/dark';
import DefaultTheme from '../../themes/default';
import LoginError from './LoginError';
import './login.style.scss';
import {
  authenticateRequest,
  dismissAuthenticationError,
} from '../../domains/authentication/authentication.actions';
import { Redirect } from 'react-router';

const form = {
  email: '',
  password: '',
};

class Login extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      form,
    };

    this.handleFormChange = this.handleFormChange.bind(this);
  }

  render() {
    const {
      hasAuthenticated,
      isAuthenticating,
      authenticationError,
    } = this.props;

    if (hasAuthenticated) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <DarkTheme>
        <LoginMain>
          <DefaultTheme>
            <LoginError
              title="Authentication"
              open={!!authenticationError}
              message={authenticationError}
              onClose={() => {this.props.dismissAuthenticationError();}}
            />
          </DefaultTheme>

          <LoginForm
            className={isAuthenticating && '--hide'}
            form={this.state.form}
            error={authenticationError}
            onChange={this.handleFormChange}
            onSubmit={() => {this.props.authenticateRequest(this.state.form.email, this.state.form.password);}}
          />

        </LoginMain>
      </DarkTheme>
    );
  }

  handleFormChange(key, val) {
    const formData = this.state.form;
    formData[key] = val;
    this.setState({
      ...this.state,
      form: formData,
    });
  }
}

Login.propTypes = {
  hasAuthenticated: PropTypes.bool,
  isAuthenticating: PropTypes.bool,
  authenticationError: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  authenticateRequest: PropTypes.func,
  dismissAuthenticationError: PropTypes.func,
};

const mapStateToProps = state => ({
  hasAuthenticated: state.authentication.hasAuthenticated,
  isAuthenticating: state.authentication.isAuthenticating,
  authenticationError: state.authentication.hasError,
});

const mapDispatchToProps = dispatch => bindActionCreators({
  authenticateRequest,
  dismissAuthenticationError,
}, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Login);
