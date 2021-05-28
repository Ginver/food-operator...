import React, { useState } from "react";
import './DietVariations.css';


function DietVariations({ setDietType }) {
    // console.log('Wat is setDiettype?', setDiettype)
    const [typeOfDiet, setTypeOfDiet] = useState('');


    return (
        <main className="diet-types">
            <p>DIET types</p>
            <ul>
                <li>
                    <input className="diet-radio"
                        type="radio"
                        name="radio"
                        value={typeOfDiet}
                        onChange={() => (setDietType('vegetarian'))}
                    />
                    <label className="diet-label">vegetarian</label>
                </li>
                <li>
                    <input className="diet-radio"
                        type="radio"
                        name="radio"
                        value={typeOfDiet}
                        onChange={() => setDietType('vegan')}
                    />
                    <label className="diet-label">vegan</label>
                </li>
                <li>
                    <input className="diet-radio"
                        type="radio"
                        name="radio"
                        value={typeOfDiet}
                        onChange={() => setDietType('dairy free')}
                    />
                    <label className="diet-label">dairy free</label>
                </li>
                <li>
                    <input className="diet-radio"
                        type="radio"
                        name="radio"
                        value={typeOfDiet}
                        onChange={() => setDietType('gluten free')}
                    />
                    <label className="diet-label">gluten free</label>
                </li>
                <li>
                    <input className="diet-radio"
                       type="radio"
                       name="radio"
                       value={typeOfDiet}
                       onChange={() => setDietType('')}
                    />
                    <label className="diet-label">any diet</label>
                </li>
            </ul>
        </main>
    )
};

export default DietVariations;

