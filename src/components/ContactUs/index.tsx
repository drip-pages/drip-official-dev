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
            <span className="message">
                取材の申し込み、掲載、どんどん募集しています。<br />
            </span>
            <div className="label">
                Partner
            </div>
            <span className="message">
                何か面白いことを一緒にやりましょう！<br />
            </span>
            <div className="label">
                Media
            </div>
            <span className="message">
                我こそは！と思う熱気にあふれた若者を待っています！<br />
            </span>
            <br/>
        </div>
        <a href="https://goo.gl/forms/my00T6ZbZK" target="_blank" rel="noopener noreferrer">
            <button className="contact-button">
                お問い合わせ
            </button>
        </a>
    </div>
)

export default ContactUs

