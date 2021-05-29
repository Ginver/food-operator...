import React from 'react';
import MealData from './MealData';

function MealDataList({meallistData}) {

    return (
        <main>
            <section className="meal-cards">
                {meallistData.results.map((result) => {
                    return <MealData key={result.id} result={result} />
                })}
            </section>
        </main>
    )
};

export default MealDataList;