import React from 'react'
import Layout from '../Layout'
import Coins from '../../../components/Coins/Coins'
import { shallow } from 'enzyme'
import img from '../../../assets/images/coin.jpeg'
import { Image, Table } from 'semantic-ui-react'
import renderer from 'react-test-renderer'

describe('Layout', () => {
  it('testing layout component', () => {
    const props = {
      coins: [],
      page: 1,
      exchange: {},
    }
    const children = (
      <Table>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell width={2}>
              <p>Order Number</p>
            </Table.HeaderCell>
            <Table.HeaderCell width={2}>
              <p>Coin Icon</p>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <p>Coin Name</p>
            </Table.HeaderCell>
            <Table.HeaderCell>
              <p>USD</p>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Header>
        <Coins
          coins={props.coins}
          page={props.page}
          exchange={props.exchange}
        />
      </Table>
    )

    const tree = renderer
      .create(
        <div className="layout">
          <header className="layout-header">
            <p>Coins Table</p>
            <div>
              <Image src={img} alt="image" width={50} height={50} />
            </div>
          </header>
          <section className="layout-content">{children}</section>
          <footer className="layout-footer">&copy; Alex_Sandok 2018</footer>
        </div>,
      )
      .toJSON()
    expect(tree).toMatchSnapshot()
    console.log(tree)
  })

  it('testing layout header', () => {
    const component = shallow(<Layout />)
    expect(component.find('.layout-header').children()).toHaveLength(2)
  })

  it('testing layout content', () => {
    const component = shallow(<Layout />)
    expect(component.find('.layout-content').children()).not.toBeNull()
  })

  it('testing layout footer', () => {
    const component = shallow(<Layout />)
    expect(component.find('.layout-footer').text()).toEqual(
      '© Alex_Sandok 2018',
    )
  })
})
