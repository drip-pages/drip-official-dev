import * as React from 'react'
import './News.scss'

type NewsProps = {
  items: any[]
  onInit: () => void
}

class News extends React.Component<NewsProps, {}> {
  componentDidMount(): void {
    this.props.onInit()
  }

  render() {
    return (
      <div className="News">
        <h2>News</h2>
        <div className="content">
          <ul>
            {this.props.items.map(item => (
              <li>
                {item.day}
                <strong>{item.title}</strong>
                <br />
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {item.message}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default News
