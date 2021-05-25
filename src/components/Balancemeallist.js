import React from 'react';
// import './Balancemeallist.css';
import Balancemeal from "./Balancemeal";

function Balancemeallist({mealListData}) {
    const nutrients = mealListData.nutrients;
    // console.log(nutrients)

    return (
        <main>
            <div className="nutrients-info">
                <h3>Nutrients for the day</h3>
                <ul className="nutrients-list">
                    <li>calory: <strong>{nutrients.calories.toFixed(0)}</strong> kcal</li>
                    <li>protein: <strong>{nutrients.protein.toFixed(0)}</strong> g</li>
                    <li>fat: <strong>{nutrients.fat.toFixed(0)}</strong> g</li>
                    <li>carbs: <strong>{nutrients.carbohydrates.toFixed(0)}</strong> g</li>
                </ul>
            </div>

            <div className="meal-cards">
                {mealListData.meals.map((meal) => {
                    return <Balancemeal key={meal.id} meal={meal} />
                })}
            </div>
        </main>
    )
};

export default Balancemeallist;