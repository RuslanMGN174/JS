import React from 'react'
import NewComment from './NewComment'
import { connect } from 'react-redux'
import { delComment } from '../../actions/Actions'

const styles = {
  ul: {
    listStyle: 'none',
    margin: 0,
    padding: 0
  }
}

const CommentsList = ({ commentsList, delComment }) => {
  if (!commentsList.length) {
    return <p>No comments yet!</p>
  }
  return (
    <div>
      <ul style={styles.ul}>
        {commentsList.map((comment, author, date) => {
          return <NewComment
            key={comment.id}
            author={author}
            comment={comment}
            date={date}
            onDelete={() => delComment(comment.id)}
          />
        })}
      </ul>
    </div>
  )
}

const mapStateToProps = state => {
  return {
    commentsList: state.comments.comments,
    localStorage: localStorage.setItem('Comments', JSON.stringify(state.comments.comments))
  }

}

const mapDispatchToProps =  {
  delComment
}

export default connect(mapStateToProps, mapDispatchToProps)(CommentsList)