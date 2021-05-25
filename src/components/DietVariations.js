import React, { useState } from "react";
// import React from "react";
import './DietVariations.css';


function DietVariations({ setDiettype }) {
    // console.log('Wat is setDiettype?', setDiettype)
    const [typeOfDiet, setTypeOfDiet] = useState('');
    // const [checked, toggleChecked] = useState(false);

    // function resetDiet() {
    //     toggleChecked(false)
    // }

    return (
        <main className="diettypes">

            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    // checked={!checked}
                    onChange={() => (setDiettype('vegetarian'))}
                   // onClick={() => toggleResetDiet(true)}
                />
            <label className="diet-label">vegetarian</label>

            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    // checked={!checked}
                    onChange={() => setDiettype('vegan')}
                   // onClick={() => toggleResetDiet(true)}
                />
            <label className="diet-label">vegan</label>

            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    // checked={!checked}
                    onChange={() => setDiettype('dairy free')}
                   // onClick={() => toggleResetDiet(true)}
                />
            <label className="diet-label">dairy free</label>

            <input className="diet-radio"
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    // checked={!checked}
                    onChange={() => setDiettype('gluten free')}
                    // onClick={() => toggleResetDiet(!resetDiet)}
                />
            <label className="diet-label">gluten free</label>

            <input className="diet-radio"
                   type="radio"
                   name="radio"
                   value={typeOfDiet}
                // checked={true}
                   onChange={() => setDiettype('')}
                // onClick={() => toggleResetDiet(!resetDiet)}
            />
            <label className="diet-label">none</label>

            {/*<button className="action-button"*/}
            {/*        type="reset"*/}
            {/*        name="reset-button"*/}
            {/*        onClick={() => setDiettype('')}*/}

            {/*>*/}
            {/*    reset*/}
            {/*</button>*/}
        </main>
    );
};

export default DietVariations;

