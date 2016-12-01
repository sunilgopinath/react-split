import React from 'react'
import Logo from '../../components/Logo'
import Navigation from '../../components/Navigation'
import './CoreLayout.scss'
import '../../styles/core.scss'
import '../../styles/brisbanetimes.scss'

export const CoreLayout = ({ children }) => (
  <div>
    <Logo />
    <Navigation />
    <div>
      {children}
    </div>
  </div>
)

CoreLayout.propTypes = {
  children : React.PropTypes.element.isRequired
}

export default CoreLayout
