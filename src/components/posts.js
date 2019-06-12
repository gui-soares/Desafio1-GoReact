import React from 'react'
import PropTypes from 'prop-types'

import PostHeader from './postHeader'

const Posts = props => (
  <div className="post">
    <PostHeader
      avatar={props.data.avatar}
      name={props.data.name}
      time={props.data.time}
    />
    <p>{props.data.body}</p>
  </div>
)

Posts.propTypes = {
  data: PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired
  }).isRequired
}

export default Posts
