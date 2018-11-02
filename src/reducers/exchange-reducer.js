// redux
import { handleActions } from 'redux-actions';

// actions
import actions from '../actions/exchange-action';

export const initialState = {
  error: '',
  items: {}
};

export default handleActions(
  {
    [actions.exchange.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: {
        ...state.items,
        ...payload.values
      }
    }),

    [actions.exchange.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error
    })
  },
  initialState
);
