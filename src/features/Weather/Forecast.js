import React, { useState, useEffect } from 'react';
import { connect } from 'react-redux';
import Temperature from './Temperature';
import Spinner from './Spinner';
import { convertToF } from './helpers';

function Forecast(props) {
  const { weather, isLoading, error } = props;

  const [tempColor, setTempColor] = useState('transparent');

  const { weather_state_abbr, weather_state_name, the_temp } = weather
    ? weather.consolidated_weather[0]
    : {};

  const iconUrl = `https://www.metaweather.com/static/img/weather/png/${weather_state_abbr}.png`;

  useEffect(() => {
    const tempF = Math.round(convertToF(the_temp));
    if (tempF < 40) setTempColor('skyblue');
    if (tempF >= 40) setTempColor('royalblue');
    if (tempF >= 55) setTempColor('mediumturquoise');
    if (tempF >= 70) setTempColor('goldenrod');
    if (tempF >= 85) setTempColor('orange');
    if (tempF >= 100) setTempColor('orangered');
    if (tempF >= 115) setTempColor('firebrock');
  }, [the_temp, setTempColor]);

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <pre className="error">{error.toString()}</pre>;
  }
  return weather ? (
    <div className="weather-forecast">
      <h2>{`${weather.title}, ${weather.parent.title}`}</h2>
      <figure>
        <img
          className="weather-forecast--icon"
          src={iconUrl}
          alt={weather_state_name}
        />
        <figcaption>
          <Temperature temp={the_temp} color={tempColor} />
        </figcaption>
      </figure>
    </div>
  ) : null;
}

const mapStateToProps = state => ({
  weather: state.weather,
  isLoading: state.weatherIsLoading,
  error: state.weatherError,
});

export default connect(mapStateToProps)(Forecast);
