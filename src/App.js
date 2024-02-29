import logo from './logo.svg';
import { useState } from 'react';
import './App.css';

//React Components have to start with uppercase, while jsx tags have to start with lowercase.
export function MyButton({name, onClick}){
  return(
    <button onClick = {onClick}>
      New name is {name}
    </button>
  );
}


function App() {

  const [name, setName] = useState("Mary");
  function addY() {
    setName(name.concat("Y"));
  }
  return (
    <div className="App">
      <MyButton name = {name} onClick = {addY}></MyButton>
      <MyButton name = {name} onClick = {addY}></MyButton>
    </div>
  );
}

export default App;
