// react
import React, { Component } from 'react'

// semantic-ui
import { Table } from 'semantic-ui-react'

// components
import Coin from '../Coin/Coin'

export default class Coins extends Component {
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
