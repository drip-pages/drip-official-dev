import React from 'react'
import './HurgerButton.scss'
import {ReactComponent as ThreeLine} from '../../img/threeLine.svg'
import {ReactComponent as Batsu} from '../../img/batsu.svg'

type HurgerButtonProps = {
    onClick: () => void,
}
type HurgerButtonState = {
    show: boolean,
}
class HurgerButton extends React.Component<HurgerButtonProps, HurgerButtonState> {
    state =  {
        show: false,
    }

    handleHurgerButtonClick = () => {
        console.log('onClick')
        this.state.show ? this.setState({ show: false },) : this.setState({ show: true })
        this.props.onClick()
    }

    render() {
        const { show } = this.state
        return (
            <span className="HurgerButton" onClick={this.handleHurgerButtonClick}>
                {show ? (
                    <Batsu />
                ) : (
                    <ThreeLine />
                )}
            </span>
        )
    }
}

export default HurgerButton