import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MealData.css';

const apiKey = process.env.REACT_APP_RECIPE_API_KEY

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
                console.log("Wat is setMealData?", responseMeal.data)
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
        <main className="meal-complete-container">

            <article className="meal-container">

                    <h1 className="meal-title">{mealData.title}</h1>

                    <img className="meal-photo" src={imageUrl} alt="recipe" />

                <div className="meal-info">
                    <p>prep time: <strong>{mealData.readyInMinutes}</strong> minutes</p>

                    <ul>caloric breakdown per meal
                        <li>protein: {caloricBreakdown.percentProtein}%</li>
                        <li>fat: {caloricBreakdown.percentFat}%</li>
                        <li>carbs: {caloricBreakdown.percentCarbs}%</li>
                    </ul>

                    <a href={mealData.sourceUrl}>go to recipe</a>
                </div>
            </article>

            {error && (<span className="wrong-error">Something went wrong!</span>)}

            {loading && (<span>Loading...</span>)}

        </main>
    )
};

export default MealData;