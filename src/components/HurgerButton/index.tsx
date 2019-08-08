import React from 'react'
import classNames from 'classnames'
import './HurgerButton.scss'

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
            <button className={classNames('HurgerButton', {show: show})} onClick={this.handleHurgerButtonClick}>
                <span>-</span>
            </button>
        )
    }
}

export default HurgerButton