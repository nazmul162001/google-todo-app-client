import React from 'react';
import 'react-loader-spinner/dist/loader/css/react-spinner-loader.css';
import { Rings } from 'react-loader-spinner';

const Spinner = () => {
  return (
    <div className='absolute top-[50%] left-[50%]'>
      <Rings height={100} width={100} color="red" ariaLabel="loading" />
    </div>
  );
};

export default Spinner;
