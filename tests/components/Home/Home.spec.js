import React from 'react'
import { Home } from 'components/Home/Home'
import { render } from 'enzyme'

describe('(Component) Home', () => {
  let _wrapper

  beforeEach(() => {
    _wrapper = render(<Home />)
  })

  it('Renders a welcome message.', () => {
    const welcome = _wrapper.find('h4')
    expect(welcome).to.exist
    expect(welcome.text()).to.match(/Welcome!/)
  })

  it('Renders an awesome duck image.', () => {
    const duck = _wrapper.find('img')
    expect(duck).to.exist
    expect(duck.attr('alt')).to.match(/This is a duck, because Redux!/)
  })
})
