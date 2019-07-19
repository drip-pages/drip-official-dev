import React from 'react'
import headerLogo from '../../img/navi.png'

class Header extends React.Component {
    render() {
        return (
            <div className="Header">
                <img alt="DRECOM INVENTION PROJECT" src={headerLogo} className = "header-logo" />
            </div>
        )
    }
}

export default Header