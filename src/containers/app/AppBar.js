import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import Toolbar from '@material-ui/core/Toolbar';
import DarkTheme from '../../themes/dark';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
// import IconButton from '@material-ui/core/IconButton';

const AppBarComponent = ({onNavToggle, onSettingsToggle}) => (
  <Paper
    square
    className="s-background-gradient c-app__bar"
  >
    <DarkTheme>
      <Toolbar>
        <IconButton
          className="c-app__nav-toggle"
          color="inherit"
          aria-label="Menu"
          onClick={() => {onNavToggle();}}
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" className="c-app__bar-text" />
        <IconButton
          className="c-app__settings-toggle"
          aria-haspopup="true"
          onClick={onSettingsToggle}
          color="inherit"
        >
          <AccountCircle />
        </IconButton>
      </Toolbar>
    </DarkTheme>
  </Paper>
);

AppBarComponent.propTypes = {
  onNavToggle: PropTypes.func,
  onSettingsToggle: PropTypes.func,
};

export default AppBarComponent;
