import { injectReducer } from '../../store/reducers'

export default (store) => ({
  path : 'story',
  /*  Async getComponent is only invoked when route matches   */
  getComponent (nextState, cb) {
    /*  Webpack - use 'require.ensure' to create a split point
        and embed an async module loader (jsonp) when bundling   */
    require.ensure([], (require) => {
      /*  Webpack - use require callback to define
          dependencies for bundling   */
      const Story = require('../../containers/Story').default
      const reducer = require('../../modules/Story/story').default
      const actions = require('../../modules/Story/story').actions

      /*  Add the reducer to the store on key 'counter'  */
      injectReducer(store, { key: 'story', reducer })

      store.dispatch(actions.fetchStory(1))

      /*  Return getComponent   */
      cb(null, Story)

    /* Webpack named bundle   */
    }, 'counter')
  }
})
