import * as React from 'react'
import './Footer.scss'
import drecomLogo from '../../img/drecom.png'
import facebookIcon from '../../img/fb.png'
import twitterIcon from '../../img/tw.png'

const Footer = () => (
    <div className="Footer">
        <img className="drecom-logo" alt="drecom logo" src={drecomLogo} />
        <div className="sns-icons">
            <img className="facebook icon" alt="facebook" src={facebookIcon} />
            <img className="twitter icon" alt="twitter" src={twitterIcon} />
        </div>
        <p>
            Copyright 2019 Drecom Co., Ltd. All Rights Reserved.
        </p>
    </div>
)

export default Footer
