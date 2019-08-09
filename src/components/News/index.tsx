import * as React from "react";
import {Link} from "react-router-dom";
import './News.scss'

const News = () => (
    <div className="News">
        <h2>
            News
        </h2>
        <div className="content">
        <ul>
            <li>
                2019/04/24 <strong>AROW</strong>
                <br />
                <a href="https://arow-3dmap.connpass.com/event/127377/" target="_blank" rel="noopener noreferrer">
                    AROW Developer Meetup Vol.2 を開催しました！
                </a>
            </li>
        </ul>
        </div>
        <Link className="read-more" to="/news">Read More...</Link>
    </div>
)

export default News