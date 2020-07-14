import React from 'react';
import logo from './logo.svg';
import SendMails from "./components/SendMails";
import './App.css';

function App() {
  return (
    <div className="App">
       <img src={logo} className="App-logo" alt="logo" />
            <h1 className="App-title">Welcome to React</h1>
      <SendMails />
    </div>
  );
}

export default App;
