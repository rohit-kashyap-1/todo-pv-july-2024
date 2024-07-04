import logo from './logo.svg';
import './App.css';
import Popup from './components/Popup';
import { useState } from 'react';
import Todo from './components/Todo';


function App() {
  const [visible,setVisible]=useState(false)
  const openPopup = ()=>{
    setVisible(true)
  }
  return (
    <div className="App">
      {/* <button onClick={openPopup}>Open</button>
      <Popup  active={(visible==true)?'active':''}/> */}
      <Todo />
    </div>
  );
}

export default App;
