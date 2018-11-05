// react
import React from 'react'
import PropTypes from 'prop-types'

// semanic-ui
import { Table, Image, Loader } from 'semantic-ui-react'

// const
import { PAGE_COUNT } from '../../actions/coins-action'

// utils
import { imageUrl } from '../../api/api-client'

const Coin = props => {
  return (
    <Table.Row key={props.index}>
      <Table.Cell textAlign="left" width={2}>
        {(props.page - 1) * PAGE_COUNT + props.index + 1}.
      </Table.Cell>
      <Table.Cell width={2}>
        <Image src={imageUrl(props.coin.imageUrl)} size="mini" />
      </Table.Cell>
      <Table.Cell textAlign="left">{props.coin.name}</Table.Cell>
      <Table.Cell textAlign="left">
        {!props.exchange[props.coin.symbol] ? (
          <Loader active inline="centered" size="tiny" />
        ) : (
          <p>{props.exchange[props.coin.symbol]}</p>
        )}
      </Table.Cell>
    </Table.Row>
  )
}

Coin.propTypes = {
  index: PropTypes.number.isRequired,
  page: PropTypes.number.isRequired,
  exchange: PropTypes.instanceOf(Object),
  coin: PropTypes.instanceOf(Object),
}

export default Coin
