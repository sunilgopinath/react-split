import Counter from 'routes/Counter'

describe('(Route) Counter', () => {
  let _route

  beforeEach(() => {
    _route = Counter({})
  })

  it('Should return a route configuration object.', () => {
    expect(typeof _route).to.equal('object')
  })

  it('Configuration should contain path `counter`.', () => {
    expect(_route.path).to.equal('counter')
  })
})
