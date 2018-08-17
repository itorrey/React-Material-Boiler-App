import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';

const AppSettingsComponent = ({open, onClose, goTo, onLogout}) => (
  <ClickAwayListener onClickAway={onClose}>
    <Paper
      className={`c-app__settings-menu ${!open && '--closed'}`}
    >
      <MenuItem onClick={() => {goTo('account');}}>
        Account
      </MenuItem>
      <MenuItem onClick={onLogout}>
        Logout
      </MenuItem>
    </Paper>
  </ClickAwayListener>
);

AppSettingsComponent.propTypes = {
  open: PropTypes.bool,
  onClose: PropTypes.func,
  goTo: PropTypes.func,
  onLogout: PropTypes.func,
};

export default AppSettingsComponent;
