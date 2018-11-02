// redux
import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

// reducers
import coin from './coins-reducer';
import exchange from './exchange-reducer';

export default combineReducers({
  routing: routerReducer,
  coin,
  exchange
});
