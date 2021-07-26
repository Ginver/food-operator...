import React from 'react';
import './SubmitButtons.css';

function SubmitButtons({label, onSubmit}) {

    return (
        <>
        <button className="action-button"
            type="submit"
            onClick={onSubmit}
        >
        {label}
        </button>
        </>
    )
};

export default SubmitButtons;