// react
import React from 'react'

// semanic-ui
import { Table, Image, Loader } from 'semantic-ui-react'

// const
import { PAGE_COUNT } from '../../actions/coins-action'

// utils
import { imageUrl } from '../../api/api-client'

// style
import classes from './Coin.css'

export const Coin = props => {
  return (
    <Table.Row key={props.index}>
      <Table.Cell style={{ textAlign: 'left' }}>
        {(props.page - 1) * PAGE_COUNT + props.index + 1}.
      </Table.Cell>
      <Table.Cell className={classes.CellCenter}>
        <Image src={imageUrl(props.coin.imageUrl)} size="mini" />
      </Table.Cell>
      <Table.Cell style={{ textAlign: 'left' }}>{props.coin.name}</Table.Cell>
      <Table.Cell style={{ textAlign: 'left' }}>
        {!props.exchange[props.coin.symbol] ? (
          <Loader active inline="centered" size="tiny" />
        ) : (
          <p>{props.exchange[props.coin.symbol]}</p>
        )}
      </Table.Cell>
    </Table.Row>
  )
}

export default Coin
