import React from 'react';
import './App.css';
import { Header } from './components/header/header';
import { AccessManagerContainer } from './components/access-manager-container';

function App() {
  return (
    <div className="App container">
      <Header />
      <AccessManagerContainer />
    </div>
  );
}

export default App;
