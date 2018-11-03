// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// semantic-ui
import { Table } from 'semantic-ui-react'

// components
import Coin from '../Coin/Coin'

class Coins extends Component {
  render() {
    const { coins, isFetching, page, exchange } = this.props
    return (
      <Table.Body>
        {coins.map((item, index) => (
          <Coin
            index={index}
            key={item.id}
            coin={item}
            page={page}
            isFetching={isFetching}
            exchange={exchange}
          />
        ))}
      </Table.Body>
    )
  }
}

Coins.propTypes = {
  isFetching: PropTypes.bool.isRequired,
  page: PropTypes.number.isRequired,
  exchange: PropTypes.instanceOf(Object),
  coins: PropTypes.instanceOf(Array),
}

export default Coins
