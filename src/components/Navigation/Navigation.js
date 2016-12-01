import React from 'react'
import { IndexLink, Link } from 'react-router'

export const Navigation = () => (
  <div>
    <IndexLink to='/' activeClassName='route--active'>
      Home
    </IndexLink>
    {' · '}
    <Link to='counter' activeClassName='route--active'>
      Counter
    </Link>
    {' · '}
    <Link to='story' activeClassName='route--active'>
      Story
    </Link>
  </div>
)

export default Navigation
