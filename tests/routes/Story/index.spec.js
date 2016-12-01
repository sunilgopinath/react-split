import Story from 'routes/Story'

describe('(Route) Story', () => {
  let _route

  beforeEach(() => {
    _route = Story({})
  })

  it('Should return a route configuration object.', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `story`.', () => {
    expect(_route.path).to.equal('story')
  })
})
