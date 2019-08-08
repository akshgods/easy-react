import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './components/shared/Header/Header';
import  Home  from "./components/views/Home/Home";
function App() {
  return (
    <div className="App">
      <Header/>
      <Home />
    </div>
  );
}

export default App;
