import { combineReducers } from 'redux';
import authReducer from '../slice/AuthSlice';
import messageReducer from '../slice/MessageSlice';
import updateReducer from '../slice/userDataSlice';
import tradeReducer from '../slice/tradeDataSlice';

const rootReducer = combineReducers({
  auth: authReducer,
  message: messageReducer,
  update: updateReducer,
  trade: tradeReducer,
});

export default rootReducer;
