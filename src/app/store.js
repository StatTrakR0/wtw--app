import { configureStore } from '@reduxjs/toolkit'

import postsReducer from '../features/posts/postsSlice'
import usersReducer from '../features/users/usersSlice'
import notificationsReducer from '../features/notifications/notificationsSlice'
import {
  GET_LOCATIONS_BEGIN,
  GET_WEATHER_BEGIN,
  GET_LOCATIONS_SUCCESS,
  GET_WEATHER_SUCCESS,
  GET_LOCATIONS_ERROR,
  GET_WEATHER_ERROR,
} from '../features/Weather/actions';

export default configureStore({
  reducer: {
    posts: postsReducer,
    users: usersReducer,
    notifications: notificationsReducer,
  },
})

const initialState = {
  locations: null,
  locationsIsLoading: false,
  locationsError: null,
  weather: null,
  weatherIsLoading: false,
  weatherError: null,
};

function reducer(state = initialState, action) {
  switch (action.type) {
    case GET_LOCATIONS_BEGIN:
      return {
        ...state,
        weather: null,
        weatherError: null,
        locationsIsLoading: true,
        locationsError: null,
      };
    case GET_LOCATIONS_SUCCESS:
      return {
        ...state,
        locationsIsLoading: false,
        locations: action.locations,
      };
    case GET_LOCATIONS_ERROR:
      return {
        ...state,
        locationsIsLoading: false,
        locationsError: action.error,
      };
    case GET_WEATHER_BEGIN:
      return {
        ...state,
        locations: null,
        locationsError: null,
        weatherIsLoading: true,
        weatherError: null,
      };
    case GET_WEATHER_SUCCESS:
      return {
        ...state,
        weatherIsLoading: false,
        weather: action.weather,
      };
    case GET_WEATHER_ERROR:
      return {
        ...state,
        weatherIsLoading: false,
        weatherError: action.error,
      };
    default:
      return state;
  }
}

// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
// export const store = createStore(
//   reducer,
//   /* preloadedState, */ composeEnhancers(applyMiddleware(thunk))
// );

export const store = configureStore({
  reducer,
});
