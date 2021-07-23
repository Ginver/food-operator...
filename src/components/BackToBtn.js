import React from 'react';
import { useHistory } from "react-router-dom";
import './BackToBtn.css';

function BackToBtn ({label, path}) {

    const history = useHistory();

    return (
        <button className="overview-button"
                type="button"
                onClick={() => history.push(path)}
        >
            {label}
        </button>

    )
};

export default BackToBtn;