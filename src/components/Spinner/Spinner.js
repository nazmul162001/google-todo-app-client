import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Triangle } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className='absolute top-[50%] left-[50%]'>
      <Triangle height={80} width={80} color="red" ariaLabel="loading" />
    </div>
  );
};

export default Spinner;
