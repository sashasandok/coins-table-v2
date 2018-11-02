// redux
import { handleActions } from 'redux-actions';

// actions
import actions from '../actions/coins-action';

export const initialState = {
  isFetching: false,
  error: '',
  page: 1,
  items: {}
};

export default handleActions(
  {
    [actions.coin.request]: (state, { payload }) => ({
      ...state,
      isFetching: true,
      error: '',
      items: []
    }),

    [actions.coin.success]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      items: payload.items,
      [payload.page]: payload.items
    }),

    [actions.setPage]: (state, { payload }) => ({
      ...state,

      page: payload.page
    }),

    [actions.coin.error]: (state, { payload }) => ({
      ...state,
      isFetching: false,
      error: payload.error
    })
  },
  initialState
);
