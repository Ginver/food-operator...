import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MealData.css';

const apiKey = process.env.REACT_APP_RECIPE_API_KEY

function Balancemeal({meal}) {
    const [imageUrl, setImageUrl] = useState('');
    const [dietTypes, setDietTypes] = useState('');
    const [caloricBreakdown, setCaloricBreakdown] = useState('');
    const [dishType, setDishType] = useState('lunch');

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect (() => {
        async function fetchMeal() {

            setError(false);
            toggleLoading(true);

            try {
                const responseBalance = await axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${apiKey}&includeNutrition=true`);

                console.log('Wat is responseBalance?', responseBalance.data);
                setImageUrl(responseBalance.data.image);
                setDietTypes(responseBalance.data.diets);
                // console.log("Wat is setDietTypes?", setDietTypes)
                setCaloricBreakdown(responseBalance.data.nutrition.caloricBreakdown);
                setDishType(responseBalance.data.dishTypes[0]);
                toggleLoading(false);

            } catch (e) {
                console.error(e);
                setError('Failed to load');
                toggleLoading(false);
            }
        }
        if (meal.id) {
            fetchMeal();
        }
    }, [meal.id]);

    return (
        <main className="meal-complete-container">
            <article className="meal-container">

                    <h1 className="meal-title">{meal.title}</h1>
                    <img className="meal-photo" src={imageUrl} alt="recipe" />

                    <div className="meal-info">
                        <ul>
                            <li>prep time: <strong>{meal.readyInMinutes}</strong> minutes</li>
                        </ul>

                        <ul>caloric breakdown per meal
                            <li>protein: {caloricBreakdown.percentProtein}%</li>
                            <li>fat: {caloricBreakdown.percentFat}%</li>
                            <li>carbs: {caloricBreakdown.percentCarbs}%</li>
                        </ul>
                        <a href={meal.sourceUrl} target="_blank" rel="noreferrer">show recipe</a>
                    </div>

                    {error && (<span className="wrong-error">Something went wrong!</span>)}
                    {loading && (<span>Loading...</span>)}

            </article>
        </main>
    )
};

export default Balancemeal;