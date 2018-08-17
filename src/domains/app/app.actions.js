import {
  TOGGLE_NAV,
  TOGGLE_SETTINGS,
} from './app.constants';

export const toggleNav = (value) => dispatch => {
  dispatch({
    type: TOGGLE_NAV,
    value: value,
  });
};

export const toggleSettings = (value) => dispatch => {
  dispatch({
    type: TOGGLE_SETTINGS,
    value: value,
  });
};
