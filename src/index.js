import React, { Component, Fragment } from 'react'
import { render } from 'react-dom'

import Header from './components/header'
import Posts from './components/posts'
import './style.css'
class App extends Component {
  state = {
    posts: [
      {
        id: 1,
        name: 'User 1',
        avatar: 'https://image.flaticon.com/icons/svg/702/702003.svg',
        time: 'há 2 min',
        body:
          'Morbi quis ullamcorper nunc. Aenean scelerisque venenatis tellus, quis lobortis sem pellentesque sed.'
      },
      {
        id: 2,
        name: 'User 2',
        avatar: 'https://image.flaticon.com/icons/svg/701/701993.svg',
        time: 'há 20 min',
        body:
          'Morbi quis ullamcorper nunc. Aenean scelerisque venenatis tellus, quis lobortis sem pellentesque sed.'
      },
      {
        id: 3,
        name: 'User 3',
        avatar: 'https://image.flaticon.com/icons/svg/702/702018.svg',
        time: 'há 37 min',
        body:
          'Morbi quis ullamcorper nunc. Aenean scelerisque venenatis tellus, quis lobortis sem pellentesque sed.'
      }
    ]
  }

  render() {
    const { posts } = this.state
    return (
      <Fragment>
        <Header />
        <div className="post-container">
          {posts && posts.map(post => <Posts key={post.id} data={post} />)}
        </div>
      </Fragment>
    )
  }
}

render(<App />, document.getElementById('app'))
