import * as React from 'react'
import bigLogo from '../../img/arow.png'
import smallLogo from '../../img/ArowLogo.png'

const Arow = () => (
  <div className="Arow">
    <div className="content-left">
      <img className="bigLogo" src={bigLogo} alt="AROW" />
    </div>
    <div className="content-right">
      <img className="smallLogo" src={smallLogo} alt="AROW" />
      <p>3DリアルマップとPOIデータを活用し</p>
      <p>没入感のある新しいゲーム体験を実現するためのプラットフォーム</p>
      <a href="https://arow.world/" target="_blank" rel="noopener noreferrer">
        https://arow.world/
      </a>
    </div>
  </div>
)

export default Arow
