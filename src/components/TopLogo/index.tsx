import topLogo from '../../img/logo2.png'
import * as React from 'react'
import './TopLogo.scss'

const TopLogo = () => (
  <div className="TopLogo">
    <div className="inner">
      <img className="top-logo" src={topLogo} alt="top-logo" />
    </div>
    <h1>発明の種を産み続ける</h1>
  </div>
)

export default TopLogo
