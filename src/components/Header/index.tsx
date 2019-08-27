import React from 'react'
import headerLogo from '../../img/navi.png'
import './Header.scss'
import classNames from 'classnames'
import { Link } from 'react-router-dom'
import HurgerButton from '../HurgerButton'

type HeaderProps = {
  showMenu: boolean
  onMenuButton: () => void
}

type HeaderState = {
  value: number
}
class Header extends React.Component<HeaderProps, HeaderState> {
  state = {
    value: 0,
  }

  handleMenuButton = () => {
    this.props.onMenuButton()
  }

  render() {
    const { showMenu } = this.props
    return (
      <div className="Header">
        <div className="fixed-area">
          <div className="header-area">
            <Link to="/">
              <img alt="DRECOM INVENTION PROJECT" src={headerLogo} className="header-logo" />
            </Link>
            <span className="menu-area">
              <span className="native-button">
                <HurgerButton onClick={this.handleMenuButton} />
              </span>

              <span className="non-native-buttons">
                <Link to="/news">
                  <button className="item"> News </button>
                </Link>
                <a href="https://www.drecom.co.jp/company/" target="_blank" rel="noopener noreferrer">
                  <button className="item"> Company </button>
                </a>
                <a href="https://goo.gl/forms/my00T6ZbZK" target="_blank" rel="noopener noreferrer">
                  <button className="item"> Contact </button>
                </a>
                <Link to="/English-Home">
                  <button className="item"> English </button>
                </Link>
              </span>
            </span>
          </div>
          <ul className={classNames('underMenu', { show: showMenu })}>
            <Link to="/news">
              <li className="item">News</li>
            </Link>
            <a href="https://www.drecom.co.jp/company/" target="_blank" rel="noopener noreferrer">
              <li className="item">Company</li>
            </a>
            <a href="https://goo.gl/forms/my00T6ZbZK" target="_blank" rel="noopener noreferrer">
              <li className="item">Contact</li>
            </a>
            <Link to="/English-Home">
              <li className="item">English</li>
            </Link>
          </ul>
        </div>
        <div className="padding-area" />
      </div>
    )
  }
}

export default Header
