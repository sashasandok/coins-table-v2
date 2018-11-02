// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// api
import api from '../api/exchange'

const actions = createActions({
  exchange: {
    success: x => x,
    error: x => x,
  },
})

export default actions

const currency = 'USD'

export const getExchanges = coins => async (dispatch, getState) => {
  const state = getState()

  try {
    const values = {}
    for (let coin of coins) {
      if (!state.exchange.items[coin.symbol]) {
        const result = await api.getExchange({ coin: coin.symbol, currency })
        values[coin.symbol] = result[currency]
      }
    }

    dispatch(
      actions.exchange.success({
        values: values,
      }),
    )
  } catch (e) {
    dispatch(actions.exchange.error({ error: e }))
  }
}
