// react
import React, { Component } from 'react'
import PropTypes from 'prop-types'

// semantic-ui
import { Table, Label, Pagination } from 'semantic-ui-react'

// hoc's
import Layout from '../../HOC/Layout/Layout'

// components
import Coins from '../../components/Coins/Coins'

// Redux
import { connect } from 'react-redux'

// actions
import { getCoins, setPage } from '../../actions/coins-action'

class CoinTable extends Component {
  componentDidMount() {
    this.props.getCoins()
  }

  onPaginationChange = (e, { activePage }) => {
    this.props.setPage({ page: activePage })
  }

  render() {
    const { page, exchange, coins } = this.props
    return (
      <Layout>
        <Table
          celled
          fixed={true}
          textAlign="center"
          inverted
          verticalAlign="middle"
        >
          <Table.Header>
            <Table.Row>
              <Table.HeaderCell>
                <Label ribbon> Order Number</Label>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Label ribbon>Coin Icon</Label>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Label ribbon>Coin Name</Label>
              </Table.HeaderCell>
              <Table.HeaderCell>
                <Label ribbon>USD</Label>
              </Table.HeaderCell>
            </Table.Row>
          </Table.Header>
          <Coins coins={coins} page={page} exchange={exchange} />
        </Table>
        <Pagination
          activePage={page}
          onPageChange={this.onPaginationChange}
          totalPages={10}
          inverted
        />
      </Layout>
    )
  }
}

CoinTable.propTypes = {
  getCoins: PropTypes.func.isRequired,
  setPage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  exchange: PropTypes.instanceOf(Object),
  coins: PropTypes.instanceOf(Array),
}

const mapStateToProps = state => ({
  isFetching: state.coin.isFetching,
  coins: state.coin.items[state.coin.page] || [],
  page: state.coin.page,
  exchange: state.exchange.items,
})

const mapDispatchToProps = dispatch => ({
  getCoins: () => dispatch(getCoins()),
  setPage: args => dispatch(setPage(args)),
})

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(CoinTable)
