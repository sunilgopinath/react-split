import { LOAD_STORY, loadStory, fetchStory, default as storyReducer } from 'modules/Story/story'

describe('(Redux Module) Story', () => {
  it('Should export a constant LOAD_STORY.', () => {
    expect(LOAD_STORY).to.equal('LOAD_STORY')
  })

  describe('(Reducer)', () => {
    it('Should be a function.', () => {
      expect(storyReducer).to.be.a('function')
    })

    it('Should initialize with state of empty story ({}).', () => {
      expect(storyReducer(undefined, {})).to.deep.equal({ story : {} })
    })

    it('Should return the previous state if an action was not matched.', () => {
      let state = storyReducer(undefined, {})
      expect(state).to.deep.equal({ story : {} })
      state = storyReducer(state, { type : '@@@@@@@' })
      expect(state).to.deep.equal({ story : {} })
    })

    describe('(Action Creator) loadStory', () => {
      it('Should be exported as a function.', () => {
        expect(loadStory).to.be.a('function')
      })

      it('Should return an action with type "LOAD_STORY".', () => {
        expect(loadStory()).to.have.property('type', LOAD_STORY)
      })

      it('Should assign the first argument to the "payload" property.', () => {
        let payload = { id : 1, title : 'Title', body : '<p>Paragraph 1</p>' }
        expect(loadStory(payload)).to.have.property('payload', payload)
      })
    })
  })
})
