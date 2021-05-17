import React, { useState } from "react";
import './DietVariations.css';


function DietVariations({ setDiettype }) {
    // console.log('Wat is setDiettype?', setDiettype)
    const [typeOfDiet, setTypeOfDiet] = useState('');

    return (
        <div className="diettypes">
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => (setDiettype('vegetarian'))}
                />
            <label className="diet-label">vegetarian</label>
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => setDiettype('vegan')}
                />
            <label className="diet-label">vegan</label>
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => setDiettype('dairy free')}
                />
            <label className="diet-label">dairy free</label>
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => setDiettype('gluten free')}
                />
            <label className="diet-label">gluten free</label>
        </div>
    );
};

export default DietVariations;

