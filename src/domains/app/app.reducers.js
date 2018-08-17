import {
  TOGGLE_NAV,
  TOGGLE_SETTINGS,
} from './app.constants';

const initialState = {
  isNavOpen: false,
  isSettingsOpen: false,
};

export default (state = initialState, action) => {
  switch (action.type) {
  case TOGGLE_NAV: {
    return {
      ...state,
      isNavOpen: action.value,
    };
  }
  case TOGGLE_SETTINGS: {
    return {
      ...state,
      isSettingsOpen: action.value,
    };
  }
  default: return state;
  }
};
