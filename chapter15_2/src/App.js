import React from 'react';
import Container from './Container';
import CommentsList from "./Comments/CommentList.js"

function App() {
  const launchButtonText = "New Comment";
  // const onSubmit = (event) => {
  //   event.preventDefault(event);
  //   console.log(event.target.name.value);
  //   console.log(event.target.comment.value);
  // }

  const [comments, setComments] = React.useState([
    { id: 1, author: "qwe", comment: "Купить хлеб" },
    { id: 2, author: "asd", comment: "Купить масло" },
    { id: 3, author: "zxc", comment: "Купить молоко" }

  ]);


  return (
    <div>
      <div className="sidenav">
        <Container
          launchButtonText={launchButtonText}
        // onSubmit={onSubmit}
        />
      </div>
      <div className="main">
        {comments.length
          ? (<CommentsList comments={comments} />)
          : (<p>No comments yet!</p>)}
      </div>
    </div>
  );
}

export default App;
