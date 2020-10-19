import React from 'react';
import logo from './logo.svg';
import './App.css';

function Hello({polilla}){

  return <p>holllla {polilla}</p>
}

function App() {

  var [cosa,setCosa] = React.useState({valor: "2000"});

  const change = (e)=>{
    
    setCosa({valor : e.target.value});
  }
;
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload {cosa.valor}.
        </p>
        <input type='text' value={cosa.valor} name='input' onChange={change} />
        <Hello polilla="hellloo2" />
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
