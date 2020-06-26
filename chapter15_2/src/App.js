import React from 'react';
import Container from './Container';
import CommentsList from "./Comments/CommentList.js"
import Context from './Context';

function App() {
  const launchButtonText = "New Comment";
  // const onSubmit = (event) => {
  //   event.preventDefault(event);
  //   console.log(event.target.name.value);
  //   console.log(event.target.comment.value);
  // }

  const [comments, setComments] = React.useState([]);

  const removeComment = (id) => {
    setComments(comments.filter(comment => comment.id !== id));
  };

  const addComment = (event) => {
    setComments(comments.concat([
      {
        id: Date.now(),
        author: event.target.name.value,
        text: event.target.comment.value,
        date: new Date().toLocaleString()
      }
    ]))
  }

  return (
    <Context.Provider value={{ removeComment }}>
      <div>
        <div className="sidenav">
          <Container
            launchButtonText={launchButtonText}
            onSubmit={addComment}
          />
        </div>
        <div className="main">
          {comments.length
            ? (<CommentsList comments={comments} />)
            : (<p>No comments, yet!</p>)}
        </div>
      </div>
    </Context.Provider>
  );
}

export default App;