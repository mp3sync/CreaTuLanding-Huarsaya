import React from 'react'
import { PropagateLoader } from 'react-spinners';

const LoaderComponent = () => {
  return (
    <div style={{ width: '100%', height: '85vh', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
      <PropagateLoader color="#FFB989" size={60} />
    </div>
  );
};

export default LoaderComponent;