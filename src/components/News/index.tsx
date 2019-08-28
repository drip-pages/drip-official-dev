import * as React from 'react'
import { Link } from 'react-router-dom'
import './News.scss'
import NewsList from "../NewsList";

type NewsProps = {
  items: any[]
}

const News = (props: NewsProps) => (
  <div className="News">
    <h2>News</h2>
    <div className="content">
      <NewsList items={props.items.slice(0, 3)} />
    </div>
    <Link className="read-more" to="/news">
      Read More...
    </Link>
  </div>
)

export default News
