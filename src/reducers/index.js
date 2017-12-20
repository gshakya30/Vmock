import { combineReducers } from 'redux';
import UserListReducer from './reducer_userList';

const rootReducer = combineReducers({
  userList: UserListReducer
});

export default rootReducer;
