import React from 'react';
import './PageHeader.css';

function PageHeader({ title }) {
    return (
        <main className="pageHeader-container">
            <article>
                {/*<img className="pageHeader-icon" src={icon} alt={title} />*/}
                <h1 className="pageHeader-title">{title}</h1>
            </article>
        </main>
    );
}

export default PageHeader;