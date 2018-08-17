import { combineReducers } from 'redux'
import { routerReducer } from 'react-router-redux'
import counter from './counter'
import authentication from './authentication'
import navigation from './navigation'

export default combineReducers({
  routing: routerReducer,
  authentication,
  navigation
})