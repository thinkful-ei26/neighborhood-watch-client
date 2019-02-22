import { combineReducers } from 'redux';
import nav from './navigation';
import auth from './auth';
import posts from './posts';
import comments from './comments';
import geolocation from './geolocation';
import { reducer as formReducer } from 'redux-form';
import socket from './socket';
// import comments from './comments';

export default combineReducers({
  nav,
  auth,
  posts,
  geolocation,
  socket,
  comments,
  form: formReducer,
});
