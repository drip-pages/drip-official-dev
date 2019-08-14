import React from 'react'
import headerLogo from '../../img/navi.png'
import './Header.scss'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import classNames from "classnames";
import {Link} from "react-router-dom";

type HeaderState = {
    showMenu: boolean,
    value: number,
}
class Header extends React.Component<{}, HeaderState> {
    state ={
        showMenu: false,
        value: 0,
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
                <div className="header-area">
                    <Link to="/">
                        <img alt="DRECOM INVENTION PROJECT" src={headerLogo} className="header-logo"/>
                    </Link>
                    <span className="menu-area">
                        <span className="native-button">
                            <button onClick={this.handleMenuButton}>
                                三
                            </button>
                        </span>
                        <span className="non-native-buttons">
                            <Link to="/news">
                                <button> News </button>
                            </Link>
                            <a href="https://www.drecom.co.jp/company/" target="_blank" rel="noopener noreferrer">
                                <button onClick={this.handleCompanyButton}> Company </button>
                            </a>
                            <a href="https://goo.gl/forms/my00T6ZbZK" target="_blank" rel="noopener noreferrer">
                                <button onClick={this.handleContactButton}> Contact </button>
                            </a>
                            <Link to="/English-Home">
                                <button onClick={this.handleEnglishButton}> English </button>
                            </Link>
                        </span>
                    </span>
                </div>
                <ul className={classNames('underMenu', {show: this.state.showMenu})}>
                    <Link to="/news">
                        <li>News</li>
                    </Link>
                    <a href="https://www.drecom.co.jp/company/" target="_blank" rel="noopener noreferrer">
                        <li onClick={this.handleCompanyButton}>Company</li>
                    </a>
                    <a href="https://goo.gl/forms/my00T6ZbZK" target="_blank" rel="noopener noreferrer">
                        <li onClick={this.handleContactButton}>Contact</li>
                    </a>
                    <Link to="/English-Home">
                        <li onClick={this.handleEnglishButton}>English</li>
                    </Link>
                </ul>
            </div>
        )
    }
}

// const a11yProps = (index: number) => {
//     return {
//         id: `simple-tab-${index}`,
//         'aria-controls': `simple-tabpanel-${index}`,
//     }
// }

export default Header