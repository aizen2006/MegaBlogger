import React from 'react'

function Logo({width="100px"}) {
  return (
    <div style={{width}} >
      <img src="/favicon.ico" alt="Logo" className='w-full h-full object-cover' width={width} height={width} />
    </div>
  );
}

export default Logo;