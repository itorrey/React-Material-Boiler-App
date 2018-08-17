
import { combineReducers } from 'redux';
import app from '../domains/app/app.reducers';
import authentication from '../domains/authentication/authentication.reducers';

export default combineReducers({
  app,
  authentication,
});
