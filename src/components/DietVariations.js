import React from "react";
import './DietVariations.css';

function DietVariations({ setDietType }) {


    return (
        <main className="diet-types">
            <p>DIET types</p>
            <ul>
                <li>
                    <input className="diet-radio"
                        type="radio"
                        name="radio"
                        value="vegetarian"
                        onChange={() => (setDietType('vegetarian'))}
                    />
                    <label className="diet-label">vegetarian</label>
                </li>
                <li>
                    <input className="diet-radio"
                        type="radio"
                        name="radio"
                        value="vegan"
                        onChange={() => setDietType('vegan')}
                    />
                    <label className="diet-label">vegan</label>
                </li>
                <li>
                    <input className="diet-radio"
                        type="radio"
                        name="radio"
                        value="dairy free"
                        onChange={() => setDietType('dairy free')}
                    />
                    <label className="diet-label">dairy free</label>
                </li>
                <li>
                    <input className="diet-radio"
                        type="radio"
                        name="radio"
                        value="gluten free"
                        onChange={() => setDietType('gluten free')}
                    />
                    <label className="diet-label">gluten free</label>
                </li>
                <li>
                    <input className="diet-radio"
                       type="radio"
                       name="radio"
                       value="any diet"
                       onChange={() => setDietType('')}
                    />
                    <label className="diet-label">any diet</label>
                </li>
            </ul>
        </main>
    )
};

export default DietVariations;

