import * as React from 'react'
import './ContactUs.scss'

const ContactUs = () => (
    <div className="ContactUs">
        <h2>
            Contact us!
        </h2>
        <div className="contents">
            <div className="label">
                Media
            </div>
            : 取材の申し込み、掲載、どんどん募集しています。<br />
            <div className="label">
                Partner
            </div>
            : 何か面白いことを一緒にやりましょう！<br />
            <div className="label">
                Media
            </div>
            : 我こそは！と思う熱気にあふれた若者を待っています！<br />
            <br/>
        </div>
        <button className="contuct-button">
            お問い合わせ
        </button>
    </div>
)

export default ContactUs

