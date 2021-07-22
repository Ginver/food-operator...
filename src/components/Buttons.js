import React from 'react';
import './Buttons.css';

function Buttons({label, type}) {

    return (
        <>
        <button className="action-button">
           {label}
            {type}
        </button>
        </>
    )
};

export default Buttons;