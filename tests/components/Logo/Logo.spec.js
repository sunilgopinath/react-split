import React from 'react'
import { Logo } from 'components/Logo/Logo'
import { IndexLink } from 'react-router'
import { shallow } from 'enzyme'

describe('(Component) Logo', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = shallow(<Logo />)
  })

  it('Renders a heading.', () => {
    const heading = _wrapper.find('h1')
    expect(heading).to.exist
    expect(heading.text()).to.match(/Brisbane Times/)
  })

  it('Should render a Link to Home route.', () => {
    expect(_wrapper.contains(
      <IndexLink to='/' className='logo'>
        <h1>Brisbane Times</h1>
      </IndexLink>
    )).to.be.true
  })
})
