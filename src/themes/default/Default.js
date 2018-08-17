import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';

const theme = createMuiTheme({
  typography: {
    fontFamily: 'Open Sans',
  },
  palette: {
    primary: {
      main: 'rgba(4,97,145,1)',
    },
  },
  overrides: {
    MuiAppBar: {
      root: {
        backgroundColor: 'rgb(2,3,2)',
        color: 'orange',
      },
    },
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

class DefaultTheme extends Component {
  render() {
    return (
      <MuiThemeProvider theme={theme}>
        {this.props.children}
      </MuiThemeProvider>
    );
  }
}

DefaultTheme.propTypes = {
  children: PropTypes.element,
};

export default DefaultTheme;
