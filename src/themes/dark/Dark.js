import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  palette: {
    type: 'dark',
    primary: {
      main: 'rgba(255,255,255,0.7)',
    },
  },
  overrides: {
    MuiFormControl: {
      root: {
        margin: '10px 0px',
      },
    },
    MuiButton: {
      root: {
        margin: '30px 0px',
      },
      raised: {
        backgroundColor: 'rgba(255,255,255,0.2)',
        color: 'white',
        '&:hover': {
          backgroundColor: 'rgba(255,255,255,0.4)',
        },
      },
    },
  },
});

class DarkTheme extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

DarkTheme.propTypes = {
  children: PropTypes.element,
};

export default DarkTheme;
