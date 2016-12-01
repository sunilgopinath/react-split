import React from 'react'
import { IndexLink } from 'react-router'

export const Logo = () => (
  <div className='logoWrap'>
    <IndexLink to='/' className='logo'>
      <h1>Brisbane Times</h1>
    </IndexLink>
  </div>
)

export default Logo
