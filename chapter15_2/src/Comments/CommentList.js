import React from "react";
import NewComment from "./Comment";


const styles = {
  ul: {
    listStyle: "none",
    margin: 0,
    padding: 0
  }
};

function CommentsList(props) {
  return (
    <ul style={styles.ul}>
      {props.comments.map((comment, author) => {
        return <NewComment
          author={author}
          comment={comment}
          date={new Date().toLocaleString()}
          key={comment.id}
        />
      })}
    </ul>
  )
}

export default CommentsList;