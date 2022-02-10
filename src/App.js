import './App.css';
// import { useState, useEffect } from 'react';
import MainCard from './components/MainCard';
import Search from './components/Search';
import InfoCard from './components/InfoCard';
// import DateBuilder from './components/DateBuilder';

const App = () => {

  const dateBuilder = (d) => {
    let months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Satudray", "Sunday"];

    let day = days[d.getDay()-1];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

    return `${day} ${date} ${month} ${year}`;
  }


  return (
    <div className="App">
      <header>
        <h1>Weather Forecast</h1>
      </header>

      <div className="wrapper">
        <div className="main-card">
          <MainCard />
        </div>

        <div className="secondary-card">
          <div className="secondry-header">
            {/* ----------------DateBuilder---------------- */}
              <div> {dateBuilder(new Date())} </div>
            {/* ----------------SearchBar---------------- */}
              <Search />
          </div>

          <div className="component-infos">
            <InfoCard />
            {/* InfosCard name= "Wind Speed" */}
            {/* InfosCard name= "Wind Direction" */}
            {/* InfosCard name= "Visibility" */}
            {/* InfosCard name= "Sunrise" */}
            {/* InfosCard name= "Sunset" */}
          </div>

          <div className="metrics-system">
            {/* MetricsCard */}
          </div>
        </div>
      </div>

    </div>
  );
}

export default App;
