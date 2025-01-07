import React from 'react'

interface ButtonProps {
    // text: string; // not good practice
    children: React.ReactNode;
    onHanldeClick: (event: React.MouseEvent) => void;
    // color: string; // how about set range
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}


const Button = ( { children, onHanldeClick, color = 'primary' }: ButtonProps ) => {
  return (
    <div>
      <button className={'btn btn-' + color} onClick={onHanldeClick} >{children}</button>
    </div>
  )
}

export default Button