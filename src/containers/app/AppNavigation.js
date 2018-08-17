import React from 'react';
import PropTypes from 'prop-types';
import Paper from '@material-ui/core/Paper';
import List from '@material-ui/core/List';
import DefaultTheme from '../../themes/default';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

const navMap = [
  {
    text: 'Dashboard',
    value: '',
  },
  {
    text: 'Inventory',
    value: 'inventory',
  },
];


const AppNavigationComponent = ({onSelect, open}) => (
  <Paper
    square
    className={`s-background-light c-app__nav ${!open && '--closed'}`}
  >
    <DefaultTheme>
      <List component="nav">
        {
          navMap.map( nav => (
            <ListItem button key={nav.text} onClick={() => {
              onSelect(nav.value);
            }} className="c-app__nav-item">
              <ListItemText primary={nav.text} />
            </ListItem>
          ))
        }
      </List>
    </DefaultTheme>
  </Paper>
);

AppNavigationComponent.propTypes = {
  onSelect: PropTypes.func,
  open: PropTypes.bool,
};

export default AppNavigationComponent;
