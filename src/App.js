import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from './components/nav-bar'
import Counters from './components/counters';


function App() {
  return (
    <React.Fragment>
    <NavBar/>
    <main className="container-fluid m-2">
      <Counters/>
    </main>
    </React.Fragment>
    
  );
}

export default App;
