import React from 'react';
import './Buttons.css';


function Buttons({onClick, label, type}) {

    return (
        <>
        <button className="action-button">
           type={type}
            {onClick}
            {label}
        </button>
        </>
    )
};

export default Buttons;