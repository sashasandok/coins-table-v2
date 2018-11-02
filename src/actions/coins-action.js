// babel
import 'babel-polyfill'

// redux
import { createActions } from 'redux-actions'

// api
import api from '../api/coins'

// utils
import _ from 'lodash'
import { divideToPages } from '../utils/paging'

// actions
import { getExchanges } from './exchange-action'

//mappers
import coinMapper from '../mappers/coins-mappers'

// const
export const PAGE_COUNT = 20

const actions = createActions({
  coin: {
    request: x => x,
    success: x => x,
    error: x => x,
  },
  setPage: x => x,
})

export default actions

export const getCoins = () => async dispatch => {
  dispatch(actions.coin.request())

  try {
    const result = await api.getCoins()
    if (!result.Response === 'Success') {
      actions.coin.error({ error: 'Fetching coins error.' })
    }

    const items = _.values(result.Data).map(coinMapper)
    const pages = divideToPages(items, PAGE_COUNT)

    dispatch(
      actions.coin.success({
        pagination: result.pagination,
        items: pages,
      }),
    )
    dispatch(getExchanges(pages[1]))
  } catch (e) {
    dispatch(actions.coin.error({ error: e }))
  }
}

export const setPage = ({ page }) => async (dispatch, getState) => {
  const state = getState()
  dispatch(actions.setPage({ page }))
  dispatch(getExchanges(state.coin.items[page]))
}
