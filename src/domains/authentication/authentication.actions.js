import httpService from '../../services/http';
import {
  AUTHENTICATE_REQUEST,
  AUTHENTICATE_SUCCESS,
  AUTHENTICATE_ERROR,
  AUTHENTICATE_REMOVE,
  DISMISS_ERROR,
} from './authentication.constants';

export const authenticateRequest = (email, password) => dispatch => {
  dispatch({
    type: AUTHENTICATE_REQUEST,
  });

  if (typeof mock === 'boolean' && !!mock) {
    // console.log('Mock Login!');
    localStorage.setItem('jwt', '1234-test');
    setTimeout(() => {
      dispatch({
        type: AUTHENTICATE_SUCCESS,
        jwt: '1234-test',
      });
    }, 2000);
  } else if (typeof mockError === 'boolean' && !!mockError) {
    // console.log('Mock Error Login!');
    setTimeout(() => {
      dispatch({
        type: AUTHENTICATE_ERROR,
        error: 'Invalid Credentials',
      });
    }, 2000);
  } else {
    httpService.post('/login', {
      email,
      password,
    })
      .then(data => {
        localStorage.setItem('jwt', '1234-test');
        dispatch({
          type: AUTHENTICATE_SUCCESS,
          jwt: data.jwt,
        });
      })
      .catch(err => {
        dispatch({
          type: AUTHENTICATE_ERROR,
          error: err,
        });
      });
  }
};


export const authenticateRemove = () => dispatch => {
  localStorage.removeItem('jwt');
  dispatch({
    type: AUTHENTICATE_REMOVE,
  });
};

export const dismissAuthenticationError = () => dispatch => {
  dispatch({
    type: DISMISS_ERROR,
  });
};
