import React, { useState } from "react";
import './DietVariations.css';


function DietVariations({ setDiettype }) {
    // console.log('Wat is setDiettype?', setDiettype)
    const [typeOfDiet, setTypeOfDiet] = useState('');
    // const [resetDiet, toggleResetDiet] = useState(false);

    // function resetDiet() {
    //     setTypeOfDiet('')
    // }

    return (
        <main className="diettypes">
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => (setDiettype('vegetarian'))}
                   // onClick={() => toggleResetDiet(true)}
                />
            <label className="diet-label">vegetarian</label>
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => setDiettype('vegan')}
                   // onClick={() => toggleResetDiet(true)}
                />
            <label className="diet-label">vegan</label>
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => setDiettype('dairy free')}
                   // onClick={() => toggleResetDiet(true)}
                />
            <label className="diet-label">dairy free</label>
            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => setDiettype('gluten free')}
                    // onClick={() => toggleResetDiet(!resetDiet)}
                />
            <label className="diet-label">gluten free</label>

            <button className="action-button"
                    type="reset"
                    name="reset-button"
                    onClick={() => setTypeOfDiet('')}
            >
                reset
            </button>
        </main>
    );
};

export default DietVariations;

