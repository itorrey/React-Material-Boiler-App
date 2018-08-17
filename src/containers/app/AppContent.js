import React from 'react';
import PropTypes from 'prop-types';

const AppContentComponent = ({children}) => (
  <main className="c-app__content">
    {children}
  </main>
);

AppContentComponent.propTypes = {
  children: PropTypes.arrayOf(PropTypes.element),
};

export default AppContentComponent;
