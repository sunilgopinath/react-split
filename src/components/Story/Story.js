import React from 'react'

export const Story = (props) => (
  <article key={props.story.id}>
    <h1>{props.story.title}</h1>
    <div dangerouslySetInnerHTML={{ __html: props.story.body }} />
  </article>
)

Story.propTypes = {
  story : React.PropTypes.object.isRequired
}

export default Story
