import React from 'react'
import headerLogo from '../../img/navi.png'
import './Header.scss'
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";

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

    handleChange = (event: React.ChangeEvent<{}>, newValue: number) =>{
        this.setState({
            value: newValue,
        })
        console.log(`newValue ${newValue}`)
    }

    render() {
        return (
            <div className="Header">
                <img alt="DRECOM INVENTION PROJECT" src={headerLogo} className="header-logo" />
                <span className="menu-area">
                    <span className="native-button">
                        <button onClick={this.handleMenuButton}>
                            メニューボタン
                        </button>
                    </span>
                    <Tabs
                        className="no-native-buttons"
                        value={this.state.value}
                        indicatorColor="primary"
                        textColor="primary"
                        onChange={this.handleChange}
                        aria-label="menu"
                    >
                        <Tab label="News" />
                        <Tab label="Company" />
                        <Tab label="Contact" />
                        <Tab label="English" />
                    </Tabs>
                </span>
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