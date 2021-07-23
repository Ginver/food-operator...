import React from 'react';
import './SubmitButtons.css';

function SubmitButtons({label}) {

    return (
        <>
        <button className="submit-button">
            {label}
        </button>
        </>
    )
};

export default SubmitButtons;