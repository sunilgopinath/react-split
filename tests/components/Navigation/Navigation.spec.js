import React from 'react'
import { Navigation } from 'components/Navigation/Navigation'
import { IndexLink, Link } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Navigation', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Navigation />)
  })

  it('Should render a Link to Home route.', () => {
    expect(_wrapper.contains(
      <IndexLink activeClassName='route--active' to='/'>
        Home
      </IndexLink>
    )).to.be.true
  })

  it('Should render a Link to Counter route.', () => {
    expect(_wrapper.contains(
      <Link activeClassName='route--active' to='counter'>
        Counter
      </Link>
    )).to.be.true
  })

  it('Should render a Link to Story route.', () => {
    expect(_wrapper.contains(
      <Link activeClassName='route--active' to='story'>
        Story
      </Link>
    )).to.be.true
  })
})
