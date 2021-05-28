import React, { useState } from "react";
import './DishTypes.css';


function DishTypes({ setTypeOfDish }) {
    const [dish, setDish] = useState('');

    return (
        <main className="dish-types">
            <p>DISH types</p>
            <ul>
                <li>
                    <input className="dish-radio"
                           type="radio"
                           name="dish-radio"
                           value={dish}
                           onChange={() => setTypeOfDish('breakfast')}
                    />
                    <label className="dish-label">breakfast</label>
                </li>
                <li>
                    <input className="dish-radio"
                           type="radio"
                           name="dish-radio"
                           value={dish}
                           onChange={() => setTypeOfDish('soup')}
                    />
                    <label className="dish-label">soup</label>
                </li>
                <li>
                    <input className="dish-radio"
                           type="radio"
                           name="dish-radio"
                           value={dish}
                           onChange={() => setTypeOfDish('main course')}
                    />
                    <label className="dish-label">main course</label>
                </li>
                <li>
                    <input className="dish-radio"
                       type="radio"
                       name="dish-radio"
                       value={dish}
                       onChange={() => setTypeOfDish('salad')}
                    />
                <label className="dish-label">salad</label>
                </li>
                <li>
                    <input className="dish-radio"
                       type="radio"
                       name="dish-radio"
                       value={dish}
                       onChange={() => setTypeOfDish('dessert')}
                    />
                    <label className="dish-label">dessert</label>
                </li>
            </ul>
        </main>
    )
};

export default DishTypes;

