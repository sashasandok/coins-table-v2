import React from 'react'
import App from './App'
import { shallow } from 'enzyme'

describe('App', () => {
  it('App rendered withot crashing', () => {
    shallow(<App />)
    // expect(component)
  })
})
