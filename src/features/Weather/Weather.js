import React from 'react'
import Search from './Search';
import Locations from './Locations';
import Forecast from './Forecast';

/*
 * Based on lessons from "Pure Redux" course by Dave Ceddia
 * https://daveceddia.com/
 */

function Weather() {
  return (
    <div className="Weather">
      <h1>Current Weather</h1>
      <p>
        Data provided by{' '}
        <a
          href="https://www.metaweather.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Metaweather
        </a>
      </p>
      <Search />
      <Locations />
      <Forecast />
    </div>
  );
}

export default Weather;
