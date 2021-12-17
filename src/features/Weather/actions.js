export const GET_LOCATIONS_SUCCESS = 'GET_LOCATIONS_SUCCESS';
export const GET_WEATHER_SUCCESS = 'GET_WEATHER_SUCCESS';
export const GET_LOCATIONS_BEGIN = 'GET_LOCATIONS_BEGIN';
export const GET_WEATHER_BEGIN = 'GET_WEATHER_BEGIN';
export const GET_LOCATIONS_ERROR = 'GET_LOCATIONS_ERROR';
export const GET_WEATHER_ERROR = 'GET_WEATHER_ERROR';

export function getLocations(location) {
  return (dispatch, getState) => {
    dispatch({ type: GET_LOCATIONS_BEGIN });
    return fetch(
      `https://weather.daveceddia.com/api/location/search/?query=${location}`
    )
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: GET_LOCATIONS_SUCCESS,
          locations: json,
        });
      })
      .catch(error => {
        dispatch({ type: GET_LOCATIONS_ERROR, error });
      });
  };
}

export function getWeather(woeid) {
  return (dispatch, getState) => {
    dispatch({ type: GET_WEATHER_BEGIN });
    return fetch(`https://weather.daveceddia.com/api/location/${woeid}`)
      .then(res => res.json())
      .then(json => {
        dispatch({
          type: GET_WEATHER_SUCCESS,
          weather: json,
        });
      })
      .catch(error => {
        dispatch({ type: GET_WEATHER_ERROR, error });
      });
  };
}
