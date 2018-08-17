import store, { history } from '../store'

export const SET_LOCATION = 'navigation/SET_LOCATION';
export const TOGGLE_NAV_BAR = 'navigation/TOGGLE_NAV_BAR';

const initialState = {
  currentLocation: ''
}

export default (state = initialState, action) => {
  switch (action.type) {
    case TOGGLE_NAV_BAR: {
      return {
        ...state,
        navBarOpen: !state.navBarOpen
      }
    }
    case SET_LOCATION: {
      console.log('setting '+action.location);
      return {
        ...state,
        currentLocation: action.location
      }
    }
    default:
      return state
  }
}

export const setLocation = (location) => {
  return (dispatch) => {
    dispatch({
      type: SET_LOCATION,
      location: location
    })
    // history.push(location)
  }
}