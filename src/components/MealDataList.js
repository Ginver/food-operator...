import React from 'react';
import MealData from './MealData';

function MealDataList({meallistData}) {
    // console.log("meallistData?", meallistData);

    return (
        <main>

            <section className="workout-meals">
                {meallistData.results.map((result) => {
                    return <MealData key={result.id} result={result} />
                })}
            </section>

        </main>
    )
};

export default MealDataList;