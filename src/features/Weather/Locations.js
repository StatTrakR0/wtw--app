import React, { useEffect } from 'react';
import { /*connect, */ useSelector, useDispatch } from 'react-redux';
import { getWeather } from './actions';
import Spinner from './Spinner';

// Trying out react-redux hooks!

// function Locations(props) {
//   const { locations, isLoading, error, getWeather } = props;

//   useEffect(() => {
//     if (locations && locations.length === 1) {
//       getWeather(locations[0].woeid);
//     }
//   }, [getWeather, locations]);

//   const handleClick = woeid => e => {
//     e.preventDefault();
//     getWeather(woeid);
//   };

//   if (isLoading) {
//     return <Spinner />;
//   }
//   if (error) {
//     return <pre className="error">{error.toString()}</pre>;
//   }
//   if (locations && locations.length === 0) {
//     return (
//       <div className="weather-locations">
//         <div className="warning">
//           <p>No matches found.</p>
//           <span role="img" aria-label="sad emoji">
//             🧐
//           </span>
//         </div>
//       </div>
//     );
//   }
//   return locations && locations.length > 1 ? (
//     <div className="weather-locations">
//       <p>Did you mean...</p>
//       <ul>
//         {locations
//           .sort((a, b) => (a.title > b.title ? 1 : -1))
//           .map(({ woeid, title }) => (
//             <li key={woeid}>
//               <a href={woeid} onClick={handleClick(woeid)}>
//                 {title}
//               </a>
//             </li>
//           ))}
//       </ul>
//     </div>
//   ) : null;
// }

// const mapStateToProps = state => ({
//   locations: state.locations,
//   isLoading: state.locationsIsLoading,
//   error: state.locationsError,
// });

// const mapDispatch = {
//   getWeather,
// };

// export default connect(
//   mapStateToProps,
//   mapDispatch
// )(Locations);

export default function LocationsHooked() {
  // const { locations, isLoading, error, getWeather } = props;
  const dispatch = useDispatch();
  const { locations, isLoading, error } = useSelector(state => ({
    locations: state.locations,
    isLoading: state.locationsIsLoading,
    error: state.locationsError,
  }));

  useEffect(() => {
    if (locations && locations.length === 1) {
      dispatch(getWeather(locations[0].woeid));
    }
  }, [dispatch, locations]);

  const handleClick = woeid => e => {
    e.preventDefault();
    dispatch(getWeather(woeid));
  };

  if (isLoading) {
    return <Spinner />;
  }
  if (error) {
    return <pre className="error">{error.toString()}</pre>;
  }
  if (locations && locations.length === 0) {
    return (
      <div className="weather-locations">
        <div className="warning">
          <p>No matches found.</p>
          <span role="img" aria-label="sad emoji">
            🧐
          </span>
        </div>
      </div>
    );
  }
  return locations && locations.length > 1 ? (
    <div className="weather-locations">
      <p>Did you mean...</p>
      <LocationsList locations={locations} handleClick={handleClick} />
    </div>
  ) : null;
}

function LocationsList({ locations, handleClick }) {
  return (
    <ul>
      {locations
        .sort((a, b) => (a.title > b.title ? 1 : -1))
        .map(({ woeid, title }) => (
          <li key={woeid}>
            <a href={woeid} onClick={handleClick(woeid)}>
              {title}
            </a>
          </li>
        ))}
    </ul>
  );
}
