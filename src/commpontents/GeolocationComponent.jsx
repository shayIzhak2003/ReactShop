import React, { useState } from 'react';

const GeolocationComponent = () => {
  const [coordinates, setCoordinates] = useState(null);
  const [error, setError] = useState(null);

  const handleGetCoordinates = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          setCoordinates({ latitude, longitude });
          setError(null);
        },
        (err) => {
          setError(err.message);
          setCoordinates(null);
        }
      );
    } else {
      setError('Geolocation is not supported by your browser');
      setCoordinates(null);
    }
  };

  return (
    <div>
      <button onClick={handleGetCoordinates}>Get Coordinates</button>
      {coordinates && (
        <p>
          Latitude: {coordinates.latitude}, Longitude: {coordinates.longitude}
        </p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default GeolocationComponent;
