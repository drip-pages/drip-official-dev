import React from 'react'
import headerLogo from '../../img/navi.png'
import './Header.scss'


type HeaderState = {
    showMenu: boolean,
}
class Header extends React.Component<{}, HeaderState> {
    state ={
        showMenu: false,
    }

    handleMenuButton = () => {
        this.state.showMenu ? this.setState({ showMenu: false },) : this.setState({ showMenu: true })
    }

    handleNewsButton = () => {

    }

    handleCompanyButton = () => {

    }

    handleContactButton = () => {

    }

    handleEnglishButton = () => {

    }

    render() {
        return (
            <div className="Header">
                <div id="fixed-area-id" className="fixed-area">
                    <img alt="DRECOM INVENTION PROJECT" src={headerLogo} className="header-logo" />
                    <span className="menu-area">
                        <span className="native-button">
                            <button onClick={this.handleMenuButton}>
                                メニューボタン
                            </button>
                        </span>
                        <span className="no-native-buttons">
                            <button onClick={this.handleNewsButton}>
                                News
                            </button>
                            <button onClick={this.handleCompanyButton}>
                                Company
                            </button>
                            <button onClick={this.handleContactButton}>
                                Contact
                            </button>
                            <button onClick={this.handleEnglishButton}>
                                English
                            </button>
                        </span>
                    </span>
                </div>

            </div>
        )
    }
}

export default Header