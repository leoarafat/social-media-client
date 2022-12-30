import React from 'react';
import { BallTriangle } from 'react-loader-spinner';

const AwesomeLoader = () => {
    return (
        <div className='w-[80px] mx-auto'>
<BallTriangle
  height={100}
  width={100}
  radius={5}
  color="#4fa94d"
  ariaLabel="ball-triangle-loading"
  wrapperClass={{}}
  wrapperStyle=""
  visible={true}
/>
        </div>
    );
};

export default AwesomeLoader;
