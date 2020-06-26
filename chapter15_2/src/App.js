import React from 'react';
import Container from './Container';

function App() {
  const launchButtonText = "New Comment";
  // const onSubmit = (event) => {
  //   event.preventDefault(event);
  //   console.log(event.target.name.value);
  //   console.log(event.target.comment.value);
  // }

  return (
    <div className="sidenav">
      <Container 
      launchButtonText={launchButtonText}
      // onSubmit={onSubmit}
       />
    </div>
    // <div className="main">

    // </div>
  );
}

export default App;
