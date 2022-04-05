import React from 'react';
import { LineWave } from 'react-loader-spinner'; 

const Loader = () => {
  return (
    <div>
      <p>Привіт</p>
       <LineWave
        color="#331fe4"
        height={250}
        width={250}
        ariaLabel="three-circles-rotating"
      /> 
    </div>
  );
};

export default Loader;
