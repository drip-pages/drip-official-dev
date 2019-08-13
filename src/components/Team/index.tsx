import * as React from 'react'
import Member from '../Member';
import naito from '../../img/naito.jpg'
import master from '../../img/master.jpg'
import pay from '../../img/mega.jpg'
import neco from '../../img/neco.jpg'
import ogw from '../../img/police.png'
import './Team.scss'
import pieer from '../../img/pieer.jpg'
import tk from '../../img/tk.jpeg'

const Team = () => (
    <div className="Team">
        <h2>
            Team
        </h2>
        <p>
            楽しく、やんちゃに、がむしゃらに
        </p>
        <div className="member-area">
            <Member className="member-icon" imgFile={naito} name="Producer" />
            <Member className="member-icon" imgFile={pay} name="Planner" />
            <Member className="member-icon" imgFile={neco} name="Director" />
            <Member className="member-icon" imgFile={ogw} name="Engineer" />
            <Member className="member-icon" imgFile={master} name="Master" />
            <Member className="member-icon" imgFile={pieer} name="Engineer & Planner" />
            <Member className="member-icon" imgFile={tk} name="Engineer" />
        </div>
    </div>
)

export default Team