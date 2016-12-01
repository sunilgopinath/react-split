import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'home',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Home = require('../../containers/Home').default
      const reducer = require('../../modules/Home/home').default
      const actions = require('../../modules/Home/home').actions

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'home', reducer })

      store.dispatch(actions.fetchTopStories())

      /*  Return getComponent   */
      cb(null, Home)

    /* Webpack named bundle   */
  }, 'home')
  }
})
