import React from 'react'
import NewComment from './NewComment'
import { connect } from 'react-redux'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

const CommentsList = ({ commentsList }) => {
  if (!commentsList.length) {
    return <p>No comments yet!</p>
  }
  return (
    <div>
      <ul style={styles.ul}>
        {commentsList.map(comment => {
          return <NewComment
            author={comment.author}
            comment={comment}
            date={comment.date}
            key={comment.id}
          />
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    commentsList: state.comments.comments
  }
}

export default connect(mapStateToProps, null)(CommentsList)