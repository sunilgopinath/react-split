import React, { PropTypes } from 'react';

const TopStories = ({topStories}) => {

  const topStoriesComponents = topStories.map(topStory =>
    <li id={topStory.id}>{topStory.title}</li>
  );
  return (<ul>{topStoriesComponents}</ul>);
};

TopStories.propTypes = {
  topStories: PropTypes.array
};

export default TopStories
