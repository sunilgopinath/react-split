import React from 'react'
import { Story } from 'components/Story/Story'
import { shallow } from 'enzyme'

describe('(Component) Story', () => {
  let _props
  let _wrapper

  beforeEach(() => {
    _props = {
      story : {
        id    : 1,
        title : 'Title',
        body  : '<p>Paragraph 1</p>'
      }
    }
    _wrapper = shallow(<Story {..._props} />)
  })

  it('Should render as a <article>.', () => {
    expect(_wrapper.is('article')).to.equal(true)
  })

  it('Should render with a key that is the identifier of the Story.', () => {
    expect(_wrapper.key()).to.equal('1')
  })

  it('Should render with a <h1> that is the Story title.', () => {
    expect(_wrapper.find('h1').text()).to.equal('Title')
  })

  it('Should render with a <div> that is the Story body.', () => {
    expect(_wrapper.find('div').html()).to.equal('<div><p>Paragraph 1</p></div>')
  })
})
