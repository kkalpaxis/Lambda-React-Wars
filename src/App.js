import React from 'react';
import './App.css';
import PersonGrid from "./components/PersonGrid";

const App = () => {
  return (
    <div className="App">
      <h1 className="Header">React Wars</h1>
      <div className="Grid">
        <PersonGrid />
      </div>
    </div>
  );
}

export default App;
