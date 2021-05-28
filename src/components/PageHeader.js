import React from 'react';
import './PageHeader.css';

function PageHeader({ picture, title }) {
    return (
        <main>
            <div className="pageHeader-container">
                <h1 className="pageHeader-title">{title}</h1>
                <img className="categoryIntro-image" src={picture} alt={title} />
            </div>
        </main>
    );
}

export default PageHeader;