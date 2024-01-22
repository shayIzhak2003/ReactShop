import React, { useState } from 'react';

const IpAddressComponent = () => {
  const [ipAddress, setIpAddress] = useState(null);
  const [ipType, setIpType] = useState(null);
  const [error, setError] = useState(null);

  const handleGetIpAddress = async () => {
    try {
      const password = prompt('Enter password:');
      if (password !== 'shay$$2003') {
        setError('Incorrect password');
        return;
      }

      const response = await fetch('https://api.ipify.org?format=json');
      const data = await response.json();
      setIpAddress(data.ip);
      setIpType(getIpType(data.ip));
      setError(null);
    } catch (err) {
      setError('Error fetching IP address');
      setIpAddress(null);
      setIpType(null);
    }
  };

  const getIpType = (ip) => {
    // Simple check for IPv6 format
    return ip.includes(':') ? 'IPv6' : 'IPv4';
  };

  return (
    <div>
      <button onClick={handleGetIpAddress}>Get IP Address</button>
      {ipAddress && (
        <p>
          Your IP Address is: {ipAddress} (Type: {ipType})
        </p>
      )}
      {error && <p>Error: {error}</p>}
    </div>
  );
};

export default IpAddressComponent;
