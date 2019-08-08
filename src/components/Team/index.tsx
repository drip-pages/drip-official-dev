import * as React from 'react'
import Member from '../Member';
import naito from '../../img/naito.jpg'
import master from '../../img/master.jpg'
import pay from '../../img/mega.jpg'
import neco from '../../img/neco.jpg'
import ogw from '../../img/police.png'

const Team = () => (
    <div className="Team">
        <h2>
            Team
        </h2>
        <Member imgFile={naito} name="Producer" />
        <Member imgFile={pay} name="Planner" />
        <Member imgFile={neco} name="Director" />
        <Member imgFile={ogw} name="Engineer" />
        <Member imgFile={master} name="Master" />
    </div>
)

export default Team