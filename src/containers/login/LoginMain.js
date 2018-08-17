import React from 'react';
import PropTypes from 'prop-types';

const LoginMain = ({children}) => (
  <main
    className="l-main__gradient --animate"
  >
    {children}
  </main>
);

LoginMain.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default LoginMain;
