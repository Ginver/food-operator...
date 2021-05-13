import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './MealData.css';

const apiKey = '02105724086e470e88f525d3ba28227f'

function MealData({result}) {
    const [imageUrl, setImageUrl] = useState('');
    const [mealData, setMealData] = useState('');
    const [caloricBreakdown, setCaloricBreakdown] = useState('');

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect (() => {
        async function fetchMeal() {
            // console.log("wat is fetchMeal:", fetchMeal)
            setError(false);
            toggleLoading(true);

            try {
                const responseMeal = await axios.get(`https://api.spoonacular.com/recipes/${result.id}/information?apiKey=${apiKey}&includeNutrition=true`);
                // console.log('Wat is responseMeal?', responseMeal.data);
                setMealData(responseMeal.data);
                console.log("Wat is setMealDaya?", responseMeal.data)
                setImageUrl(responseMeal.data.image);
                // console.log(setImageUrl)
                setCaloricBreakdown(responseMeal.data.nutrition.caloricBreakdown);
                // console.log(responseMeal.data.nutrition.caloricBreakdown);

                toggleLoading(false);

            } catch (e) {
                console.error(e);
                setError('Failed to load');
                toggleLoading(false);
            }
        }
        if (result.id) {
            fetchMeal();
        }
    }, [result.id]);

    return(
        <article>

            <h1>{mealData.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <p>Preparation time: {mealData.readyInMinutes} minutes</p>

            <ul>Caloric breakdown:
                <li>Percent protein: {caloricBreakdown.percentProtein}</li>
                <li>Percent fat: {caloricBreakdown.percentFat}</li>
                <li>Percent carbs: {caloricBreakdown.percentCarbs}</li>
            </ul>

            <a href={mealData.sourceUrl}>Go to the recipe</a>

            {error && (<span className="wrong-error">Something went wrong!</span>)}

            {loading && (<span>Loading...</span>)}


        </article>
    )
};

export default MealData;