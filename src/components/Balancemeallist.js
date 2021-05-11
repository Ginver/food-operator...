import React from 'react';
// import './Balancemeallist.css';
import Balancemeal from "./Balancemeal";

function Balancemeallist({mealListData}) {
    const nutrients = mealListData.nutrients;
    // console.log(nutrients)

    return (
        <main>
            <section className="nutrients">
                <h1>Nutrients for the day:</h1>
                <ul>
                    <li>Calory: {nutrients.calories.toFixed(0)}</li>
                    <li>Carbohydrates: {nutrients.carbohydrates.toFixed(0)}</li>
                    <li>Fat: {nutrients.fat.toFixed(0)}</li>
                    <li>Protein: {nutrients.protein.toFixed(0)}</li>
                </ul>
            </section>

            <section className="balance-meals">
                {mealListData.meals.map((meal) => {
                    return <Balancemeal key={meal.id} meal={meal} />
                })}
            </section>
        </main>
    )
};

export default Balancemeallist;