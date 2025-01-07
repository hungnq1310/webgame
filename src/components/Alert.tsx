import React, { Fragment, ReactNode } from 'react'


interface AlertProps {
    // text: string; // not good practice
    children: ReactNode;
    onClose: () => void; //close alert
}

const Alert = ( {children, onClose} : AlertProps) => {
  return (
    // <div className='alert alert-primary'>{children}</div>
    <div className="alert alert-warning alert-dismissible fade show" role="alert">
        {children}
        <button type="button" className="btn-close" data-bs-dismiss="alert" aria-label="Close" onClick={onClose}></button> 
    </div>
  )
}

export default Alert