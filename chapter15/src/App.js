import React from 'react';
import Modal from './Modal/Modal';
import CommentsList from './Comments/CommentList';

function App() {
  const [comments, setComments] = React.useState([
    { id: 1, author: "qwe", comment: "Купить хлеб" },
    { id: 2, author: "asd", comment: "Купить масло" },
    { id: 3, author: "zxc", comment: "Купить молоко" }

  ]);

  function addComment(comment) {
    setComments(comments.concat([
      {
        comment,
        id: Date.now()
      }
    ]))
  }

  return (
    <div>
      <div className="sidenav">
        <Modal create={addComment} />
      </div>
      <div class="main">
        {comments.length
          ? (<CommentsList comments={comments}/>)
          : (<p>No comments yet!</p>)}
      </div>
    </div>
  );
}

export default App;
