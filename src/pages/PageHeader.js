import React from 'react';
import './PageHeader.css';

function PageHeader({ icon, title }) {
    return (
        <div className="pageHeader-container">
            <img className="pageHeader-icon" src={icon} alt={title} />
            <h1 className="pageHeader-title">{title}</h1>
        </div>
    );
}

export default PageHeader;