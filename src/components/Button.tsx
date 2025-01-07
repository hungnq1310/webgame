import React from 'react'
import Alert from "./Alert";
import { useState } from "react";

interface ButtonProps {
    // text: string; // not good practice
    children: React.ReactNode;
    // onHanldeClick: (event: React.MouseEvent) => void;
    onAlertClick: () => void;
    // color: string; // how about set range
    color?: 'primary' | 'secondary' | 'success' | 'danger' | 'warning' | 'info' | 'light' | 'dark';
}


// const Button = ( { children, onHanldeClick, color = 'primary' }: ButtonProps ) => {
//   return (
//     <div>
//       <button className={'btn btn-' + color} onClick={onHanldeClick}>{children}</button>
//     </div>
//   )
// }

const Button = ( { children, onAlertClick, color = 'primary' }: ButtonProps ) => {

    //define state 
    const [arlertVisible, setAlert] = useState(false);
    
    // set state
    const getAlert = (arlertVisible: boolean) => {
        if (arlertVisible) {
            return (
                // close alert (button hidden)
                <Alert onClose={() => setAlert(false)}>
                    Hello <span> alert </span>
                </Alert>
            )
        }
        return null;
    }

    // event handling


    return (
        <div>
        {getAlert(arlertVisible)}
        <button className={'btn btn-' + color} onClick={
            () => {
                onAlertClick();
                setAlert(true);
            } 
        }>{children}</button>
        </div>
    )
}

export default Button