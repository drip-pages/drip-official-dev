import * as React from 'react'
import {ReactNode} from "react";
import './Invention.scss'
import classNames from 'classnames'

type InventionProps = {
    bigLogo: string
    smallLogo: string
    className?: string
    children?: ReactNode | null,
}

class Invention extends React.Component<InventionProps> {
    render() {
        const { bigLogo, smallLogo, className, children } = this.props
        return (
            <div className={classNames('Invention', className)}>
                <img className="mobile-show-logo" src={smallLogo} alt="smallLogo" />
                <img className="bigLogo" src={bigLogo} alt="AROW" />
                <div className="content-right">
                    <img className="smallLogo" src={smallLogo} alt="AROW" />
                    { children }
                </div>
            </div>
        )
    }
}

export default Invention