import React from 'react';
import logo from './logo.svg';
import BasicComponent from './components/BasicComponent'
import DangerouslySet from './components/DangerouslySet'
import DOMPurifyExample from './components/DOMPurifyExample'
import URLIssue from './components/URLIssue'
import URLIssueFixed from './components/URLIssueFixed'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header2">
        <img src={logo} className="App-logo" alt="logo" />
      </header>
      <h2>XSS</h2>
        <BasicComponent />
        <hr />
        <h2>HMTL</h2>
        <DangerouslySet />
<hr />
        <h2>Purify</h2>
        <DOMPurifyExample />
        <hr />
        <h2>URL Issue</h2>
        <URLIssue />
        <hr />
        <h2>URL Issue Fixed</h2>
        <URLIssueFixed />
        <hr />
    </div>
  );
}

export default App;
