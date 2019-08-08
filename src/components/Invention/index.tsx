import * as React from 'react'
import {ReactNode} from "react";

type InventionProps = {
    bigLogo: string
    smallLogo: string
    children?: ReactNode | null,
}

class Invention extends React.Component<InventionProps> {
    render() {
        const { bigLogo, smallLogo, children } = this.props
        return (
            <div className="Invention">
                <div className="content-left">
                    <img className="bigLogo" src={bigLogo} alt="AROW" />
                </div>
                <div className="content-right">
                    <img className="smallLogo" src={smallLogo} alt="AROW" />
                    { children }
                </div>
            </div>
        )
    }
}

export default Invention