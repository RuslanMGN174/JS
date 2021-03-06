import React from "react";
import CommentItem from "./CommentItem";


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
      {props.comments.map((comment, author, date) => {
        return <CommentItem
          author={author}
          comment={comment}
          date={date}
          key={comment.id}
        />
      })}
    </ul>
  )
}

export default CommentsList;