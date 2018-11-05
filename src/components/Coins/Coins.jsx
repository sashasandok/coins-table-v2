// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// semantic-ui
import { Table } from 'semantic-ui-react'

// components
import Coin from '../Coin/Coin'

class Coins extends Component {
  render() {
    const { coins, page, exchange } = this.props

    return (
      <Table.Body>
        {coins.map((item, index) => (
          <Coin
            index={index}
            key={item.id}
            coin={item}
            page={page}
            exchange={exchange}
          />
        ))}
      </Table.Body>
    )
  }
}

Coins.propTypes = {
  page: PropTypes.number.isRequired,
  exchange: PropTypes.instanceOf(Object),
  coins: PropTypes.instanceOf(Array),
}

export default Coins
