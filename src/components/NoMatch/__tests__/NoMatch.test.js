import React from 'react'
import NoMatch from '../NoMatch'
import { shallow } from 'enzyme'

describe('NoMatch', () => {
  it('should render correctly text', () => {
    const component = shallow(<NoMatch />)
    expect(component.find('span').text()).toContain('404 Page not found!')
  })

  it('should contain two children', () => {
    const component = shallow(<NoMatch />)
    expect(component.find('strong').children()).toHaveLength(2)
  })
})
