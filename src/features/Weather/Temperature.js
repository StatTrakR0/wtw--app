import React from 'react';
import { convertToF } from './helpers';

function Temperature(props) {
  return (
    <span className="weather-forecast--temp" style={{ color: props.color }}>
      {Math.round(convertToF(props.temp))}
      &deg;F
    </span>
  );
}

export default Temperature;
