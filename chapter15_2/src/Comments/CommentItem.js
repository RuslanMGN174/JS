import React, {useContext} from "react";
import "./Style.css";
import Context from "../Context";

function CommentItem({ comment }) {

  const {removeComment} = useContext(Context);

  return (
    <li className="media-left">
      <div className="media-body">
        <div className="media-heading">
          <div className="author">{comment.author}</div>
          <div className="metadata">
            <span className="date">{comment.date}</span>
            <span className="devide"> | </span>
            <span className="delete" onClick={removeComment.bind(null, comment.id)}> Удалить </span>
          </div>
        </div>
        <div className="media-text text-justify">{comment.text}
        </div>
      </div>
    </li>
  )
};

export default CommentItem;
