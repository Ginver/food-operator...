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
            <p>dish types</p>
            <ul>
                <li>
            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('breakfast')}
                // onClick={() => toggleResetDiet(true)}
            />
            <label className="diet-label">breakfast</label>
                </li>
                <li>
            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('soup')}
                // onClick={() => toggleResetDiet(true)}
            />
            <label className="diet-label">soup</label>
            </li>
                <li>
            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('main course')}
                // onClick={() => toggleResetDiet(true)}
            />
            <label className="diet-label">main course</label>
        </li>
                <li>
            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('salad')}
                // onClick={() => toggleResetDiet(!resetDiet)}
            />
            <label className="diet-label">salad</label>
</li>
                <li>
            <input className="dish-radio"
                   type="radio"
                   name="dish-radio"
                   value={dish}
                // checked={!checked}
                   onChange={() => setTypeOfDish('dessert')}
                // onClick={() => toggleResetDiet(!resetDiet)}
            />
            <label className="diet-label">dessert</label>
</li>
            </ul>
        </main>
    );
};

export default DishTypes;

