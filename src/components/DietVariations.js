import React, { useState } from "react";

function DietVariations({ setDiettype }) {
    // console.log('Wat is setDiettype?', setDiettype)
    const [typeOfDiet, setTypeOfDiet] = useState('');

    return (
        <span className="diettype-radio">
            <label>vegetarian</label>
                <input
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => (setDiettype('vegetarian'))}

                />
            <label>vegan</label>
                <input
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => setDiettype('vegan')}
                />

            <label>dairy free</label>
                <input
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => setDiettype('dairy free')}
                />

            <label>gluten free</label>
                <input
                    type="radio"
                    name="radio"
                    value={typeOfDiet}
                    onChange={() => setDiettype('gluten free')}
                />

        </span>
    );
};

export default DietVariations;

