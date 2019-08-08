import * as React from 'react'

type MemberProps = {
    imgFile: string
    name: string,
}
const Member = (props: MemberProps) => (
    <div className="Member">
        <img className="member-image" src={props.imgFile} alt="member" />
        <p>
            { props.name }
        </p>
    </div>
)

export default Member