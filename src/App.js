import './App.css';
// import { useState, useEffect } from 'react';
import MainCard from './components/MainCard';
import Search from './components/Search';

const App = () => {
  return (
    <div className="App">
      <header>
        <h1>Weather Forecast</h1>
      </header>
      <Search />
      <MainCard />
    </div>
  );
}

export default App;
