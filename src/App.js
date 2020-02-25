import React from 'react';
import './reset.css';
import Dashboard from './Components/Dashboard/Dashboard';
import { HashRouter } from 'react-router-dom'

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Dashboard />
      </HashRouter>
    </div>
  );
}

export default App;
