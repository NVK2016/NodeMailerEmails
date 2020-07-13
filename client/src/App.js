import React from 'react';
import SendMails from "./components/SendMails";
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <SendMails />
    </div>
  );
}

export default App;
