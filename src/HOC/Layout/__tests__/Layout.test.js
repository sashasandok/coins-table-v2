import React from 'react'
import Layout from '../Layout'
import { shallow } from 'enzyme'
import renderer from 'react-test-renderer'

describe('Layout', () => {
  it('testing layout header', () => {
    const tree = renderer.create(<Layout />).toJSON()
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
