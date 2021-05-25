import React, { useState } from "react";
// import React from "react";
// import './DietVariations.css';


function DishTypes({ setTypeOfDish }) {
    // console.log('Wat is setDiettype?', setDiettype)
    const [dish, setDish] = useState('');
    // const [checked, toggleChecked] = useState(false);

    // function resetDiet() {
    //     toggleChecked(false)
    // }

    return (
        <main className="diettypes">

            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('breakfast')}
                // onClick={() => toggleResetDiet(true)}
            />
            <label className="diet-label">breakfast</label>

            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('soup')}
                // onClick={() => toggleResetDiet(true)}
            />
            <label className="diet-label">soup</label>

            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('main course')}
                // onClick={() => toggleResetDiet(true)}
            />
            <label className="diet-label">main course</label>

            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('salad')}
                // onClick={() => toggleResetDiet(!resetDiet)}
            />
            <label className="diet-label">salad</label>

            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('dessert')}
                // onClick={() => toggleResetDiet(!resetDiet)}
            />
            <label className="diet-label">dessert</label>

        </main>
    );
};

export default DishTypes;

