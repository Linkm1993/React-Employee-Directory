import React from 'react';
import './App.css';
import Navbar from "./componets/navbar"
import SearchBar from "./componets/searchbar"
import Container from "./componets/container"

function App() {
  return (
    <div>
      <Navbar />
      <SearchBar />
      <Container />
    </div>
  );
}

export default App;
