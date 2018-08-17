import {
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_ERROR,
  AUTHENTICATE_REMOVE,
  DISMISS_ERROR,
} from './authentication.constants';

const initialState = {
  hasAuthenticated: !!localStorage.getItem('jwt'),
  isAuthenticating: false,
  hasError: false,
};

export default (state = initialState, action) => {
  // console.log('reducer');
  switch (action.type) {
  case AUTHENTICATE_REQUEST: {
    return {
      ...state,
      isAuthenticating: true,
      hasError: false,
    };
  }
  case AUTHENTICATE_SUCCESS: {
    return {
      ...state,
      isAuthenticating: false,
      hasAuthenticated: !!localStorage.getItem('jwt'),
      hasError: false,
    };
  }
  case AUTHENTICATE_ERROR: {
    return {
      ...state,
      isAuthenticating: false,
      hasAuthenticated: false,
      hasError: action.error,
    };
  }
  case AUTHENTICATE_REMOVE: {
    return {
      ...state,
      hasAuthenticated: false,
      hasError: false,
    };
  }
  case DISMISS_ERROR: {
    return {
      ...state,
      hasError: false,
    };
  }
  default: return state;
  }
};
