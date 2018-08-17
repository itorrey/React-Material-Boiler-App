// import store, { history } from '../store'

export const LOG_IN_REQUESTED = 'authentication/LOG_IN_REQUESTED'
export const LOG_IN_RESPONSE = 'authentication/LOG_IN_RESPONSE'
export const LOG_OUT = 'authentication/LOG_OUT';
export const DISMISS_ERROR = 'authentiction/DISMISS_ERROR'

const initialState = {
  isAuthenticating: false,
  loggedIn: !!localStorage.getItem('jwt'),
  errorMessage: false,
  hasError: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case LOG_IN_REQUESTED: {
      return {
        ...state,
        isAuthenticating: true
      }
    }
    case LOG_IN_RESPONSE: {
      if(action.success){
        return {
          ...state,
          isAuthenticating: false,
          loggedIn: true
        }
      }
      else{
        return {
          ...state,
          isAuthenticating: false,
          loggedIn: false,
          errorMessage: action.message,
          hasError: !state.hasError
        }
      }
    }
    case LOG_OUT:{
      localStorage.removeItem('jwt')
      return {
        ...state,
        loggedIn: false
      }
    }
    case DISMISS_ERROR:{
      return {
        ...state,
        hasError: false
      }
    }
    default:
      return state
  }
}

export const logIn = ({email, password}) => {

  return dispatch => {
    dispatch({
      type: LOG_IN_REQUESTED
    });

    return fetch('http://192.168.1.69:10010/login',{
      method: 'post',
      body: `email=${email}&password=${password}`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      }
    })
    .then(response => {
      return response.json()
    })
    .then( data => {

      if(data.jwt){
        localStorage.setItem('jwt', data.jwt);
      }

      dispatch({
        type: LOG_IN_RESPONSE,
        success: data.success,
        jwt: data.jwt || false,
        message: data.message || false
      })
      history.push('/')
    })
  }
}

export const dismissError = () => {
  return dispatch => {
    dispatch({
      type: DISMISS_ERROR
    })
  }
}

export const logOut = () => {
  return dispatch => {
    dispatch({
      type: LOG_OUT
    })
  }
}