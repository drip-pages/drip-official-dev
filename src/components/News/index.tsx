import * as React from "react";
import {Link} from "react-router-dom";
import './News.scss'

type NewsProps = {
    items: any[]
}

const News = (props: NewsProps) => (
    <div className="News">
        <h2>
            News
        </h2>
        <div className="content">
            <ul>
                {
                    props.items.slice(0, 3).map((item) => (
                        <li>
                            {item.day}
                            <strong>{item.title}</strong>
                            <br/>
                            <a href={item.link} target="_blank" rel="noopener noreferrer">
                                {item.message}
                            </a>
                        </li>
                    ))
                }
            </ul>
        </div>
        <Link className="read-more" to="/news">Read More...</Link>
    </div>
)

export default News