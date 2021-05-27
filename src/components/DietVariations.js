import React, { useState } from "react";
// import React from "react";
import './DietVariations.css';


function DietVariations({ setDiettype }) {
    // console.log('Wat is setDiettype?', setDiettype)
    const [typeOfDiet, setTypeOfDiet] = useState('');


    return (
        <main className="diettypes">
            <p>diet types</p>
            <ul>
            <li><input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    // checked={!checked}
                    onChange={() => (setDiettype('vegetarian'))}
                   // onClick={() => toggleResetDiet(true)}
                />
            <label className="diet-label">vegetarian</label>
            </li>
                <li>
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    // checked={!checked}
                    onChange={() => setDiettype('vegan')}
                   // onClick={() => toggleResetDiet(true)}
                />
            <label className="diet-label">vegan</label>
            </li>
                <li>
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    // checked={!checked}
                    onChange={() => setDiettype('dairy free')}
                   // onClick={() => toggleResetDiet(true)}
                />
            <label className="diet-label">dairy free</label>
        </li>
                <li>
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    // checked={!checked}
                    onChange={() => setDiettype('gluten free')}
                    // onClick={() => toggleResetDiet(!resetDiet)}
                />
            <label className="diet-label">gluten free</label>
</li>
            <li>
            <input className="diet-radio"
                   type="radio"
                   name="radio"
                   value={typeOfDiet}
                // checked={true}
                   onChange={() => setDiettype('')}
                // onClick={() => toggleResetDiet(!resetDiet)}
            />
            <label className="diet-label">any diet</label>
            </li>
            </ul>
        </main>
    );
};

export default DietVariations;

