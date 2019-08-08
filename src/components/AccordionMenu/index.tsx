import React from 'react'
import classNames from 'classnames'

type AccordionMenuProps = {
    show: boolean
}
class AccordionMenu extends React.Component<AccordionMenuProps, {}> {
    render() {
        const { show } = this.props
        return (
            <div className={classNames('AccordionMenu', show)}>
                <p>アコーディオンメニュー</p>
            </div>

        )
    }
}

export default AccordionMenu
