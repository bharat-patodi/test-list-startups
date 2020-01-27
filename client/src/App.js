import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Header from './components/Header';
import StartupList from './components/startupList';

function App() {
  return (
    <div className="App">
      <Header></Header>
      <StartupList></StartupList>
      <p>List of startups</p>
      <ul>
        <li>1. startup name, country</li>
        <li>2. startup name, country</li>
        <li>3. startup name, country</li>
      </ul>
    </div>
  );
}

export default App;
