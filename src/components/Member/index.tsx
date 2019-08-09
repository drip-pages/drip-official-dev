import * as React from 'react'
import './Member.scss'
import classNames from 'classnames'

type MemberProps = {
    imgFile: string
    name: string
    className?: string,
}
const Member = (props: MemberProps) => (
    <div className={classNames('Member', props.className)}>
        <img className="member-image" src={props.imgFile} alt="member" />
        <p>
            { props.name }
        </p>
    </div>
)

export default Member