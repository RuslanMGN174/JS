import React, { useState } from 'react';
import Modal from './Modal/Modal';
import CommentsList from './Comments/CommentList';
import Context from './Context';

function App() {
  const [comments, setComments] = useState([
    // { id: 1, author: "qwe", text: "Купить хлеб", date: new Date().toLocaleString() },
    // { id: 2, author: "asd", text: "Купить масло", date: new Date().toLocaleString() },
    // { id: 3, author: "zxc", text: "Купить молоко", date: new Date().toLocaleString() }
  ]);

  const removeComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const addComment = (event) => {
    event.preventDefault(event);
    setComments(comments.concat(
      {
        id: Date.now(),
        author: event.target.name.value,
        text: event.target.comment.value,
        date: new Date().toLocaleString()
      }
    ))
    localStorage.setItem("Comments", JSON.stringify(comments));
    console.log(comments);
    
  }

  return (
    <Context.Provider value={{ removeComment }}>
      <div>
        <div className="sidenav">
          <Modal
            onSubmit={addComment}
          />
        </div>
        <div className="main">
          {comments.length
            ? (<CommentsList comments={comments} />)
            : (<p>No comments yet!</p>)}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;
