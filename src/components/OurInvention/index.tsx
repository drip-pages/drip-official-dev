import * as React from "react"
import Invention from "../Invention";
import arowBigLogo from '../../img/arow.png'
import arowSmallLogo from '../../img/ArowLogo.png'
import pillarsBigLogo from '../../img/6-pillars.png'
import pillarsSmallLogo from '../../img/pillarsSmall.png'
import loveChainBigLogo from '../../img/lovechain.png'
import loveCahinSmallLogo from '../../img/loveChainSmallLogo.png'

const OurInvention = () => {
    return (
        <div className="OurInvention">
            <h2>
                Our invention
            </h2>
            <Invention bigLogo={arowBigLogo} smallLogo={arowSmallLogo}>
                <p>
                    3DリアルマップとPOIデータを活用し
                </p>
                <p>
                    没入感のある新しいゲーム体験を実現するためのプラットフォーム
                </p>
                <a href="https://arow.world/" target="_blank" rel="noopener noreferrer">
                    https://arow.world/
                </a>
            </Invention>
            <Invention bigLogo={pillarsBigLogo} smallLogo={pillarsSmallLogo}>
                <p>
                    DAppsをまたいで利用可能なトークンを、誰でも生成できるERC721拡張スマートコントラクト
                </p>
                <a href="https://6-pillars.ooo/" target="_blank" rel="noopener noreferrer">
                    https://6-pillars.ooo/
                </a>
            </Invention>
            <Invention bigLogo={loveChainBigLogo} smallLogo={loveCahinSmallLogo}>
                <strong>
                    ブロックチェーン上に2人だけのメッセージを永遠に残すサービスです。
                </strong>
                <p>
                    ブロックチェーン上に保存する事によって改ざんされる事なく永遠に記録する事が出来ます。2人だけの思い出をブロックチェーン上に残しましょう。
                </p>
                <a href="https://lovechain.ooo/" target="_blank" rel="noopener noreferrer">
                    https://lovechain.ooo/
                </a>
            </Invention>
        </div>
    )
}

export default OurInvention
