import React, { Component, Fragment } from 'react';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router';

class Authentication extends Component {
  render() {
    if (localStorage.getItem('jwt')) {
      return (
        <Fragment>
          {this.props.children}
        </Fragment>
      );
    }

    return (
      <Redirect to={'/login'} />
    );
  }
}

Authentication.propTypes = {
  children: PropTypes.element,
};

export default Authentication;
