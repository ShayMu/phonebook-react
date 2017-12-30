import { combineReducers } from 'redux';
import contacts from './contactsReducer';
import search from './searchReducer';

const rootReducer = combineReducers({
  contacts,
  search
});

export default rootReducer;
