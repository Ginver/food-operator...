import React from 'react';
import "./CategoryIntro.css";

function CategoryIntro({ url, picture, title, info }) {

    return (
        <main className="categoryIntro-container" >
            <div className="categoryIntro-image-title">
                <img className="categoryIntro-image" src={picture} alt={title} />
                <a href={url}><h1 className="categoryIntro-title" >{title}</h1></a>
            </div>
                <div className="categoryIntro-info">{info}</div>
        </main>
    );
}

export default CategoryIntro;