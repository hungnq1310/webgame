import React from 'react'


interface AlertProps {
    // text: string; // not good practice
    children: string;
}

const Alert = ( {children} : AlertProps) => {
  return (
    <div className='alert alert-primary'>{children}</div>
  )
}

export default Alert