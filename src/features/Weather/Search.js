import React, { useRef, useState } from 'react';
import { connect } from 'react-redux';
import { getLocations } from './actions';

function Search(props) {
  const { getLocations } = props;

  const [searchDisabled, setSearchDisabled] = useState(true);

  const locationRef = useRef(null);

  const handleKeyDown = e => {
    if (!searchDisabled && e.keyCode === 13) {
      getLocations(e.target.value);
    }
  };

  const handleClick = () => {
    getLocations(locationRef.current.value);
  };

  const handleInput = e =>
    e.target.value.length > 0
      ? setSearchDisabled(false)
      : setSearchDisabled(true);

  return (
    <div className="weather-search">
      <input
        ref={locationRef}
        type="text"
        placeholder="City"
        onKeyDown={handleKeyDown}
        onInput={handleInput}
      />
      <button onClick={handleClick} disabled={searchDisabled}>
        Search
      </button>
    </div>
  );
}

const mapDispatch = {
  getLocations,
};

export default connect(
  null,
  mapDispatch
)(Search);
