import React, { PropTypes } from 'react';
import TopStories from '../TopStories'

const Home = ({ topStories }) => {

    return (<div><TopStories topStories={topStories} /></div>)
};

Home.propTypes = {
  topStories: PropTypes.array
};

export default Home;
