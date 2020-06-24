import React from 'react';
import './App.css';
import { Container } from './Modal/Container';
import { Filler } from './Modal/Filler';
const App = () => {
  const triggerText = 'Open Form';
  const onSubmit = (event) => {
    event.preventDefault(event);
    console.log(event.target.name.value);
    console.log(event.target.email.value);
  };
  return (
    <div className="App">
      <Filler />
      <Container triggerText={triggerText} onSubmit={onSubmit} />
      <Filler />
      <Filler />
      <Filler />
      <Filler />
    </div>
  );
};
export default App;