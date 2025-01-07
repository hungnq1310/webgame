import React, { ReactNode } from 'react'


interface AlertProps {
    // text: string; // not good practice
    children: ReactNode;
}

const Alert = ( {children} : AlertProps) => {
  return (
    <div className='alert alert-primary'>{children}</div>
  )
}

export default Alert