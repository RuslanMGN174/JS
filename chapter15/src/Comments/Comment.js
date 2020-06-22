import React from "react";
import "./Style.css";

function NewComment({ date, comment }) {

  return (
    <li className="media-left">
      <div className="media-body">
        <div className="media-heading">
          <div className="author">{comment.author}</div>
          <div className="metadata">
            <span className="date">{date}</span>
            <span className="devide"> | </span>
            <span className="delete"> Удалить </span>
          </div>
        </div>
        <div className="media-text text-justify">{comment.comment}
        </div>
      </div>
    </li>
  )
};

export default NewComment;
