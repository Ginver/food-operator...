import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './MealData.css';

// const apiKey = '02105724086e470e88f525d3ba28227f'
const apiKey = process.env.REACT_APP_RECIPE_API_KEY

function Balancemeal({meal}) {
    const [imageUrl, setImageUrl] = useState('');
    const [dietTypes, setDietTypes] = useState('');
    const [caloricBreakdown, setCaloricBreakdown] = useState('');

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    useEffect (() => {
        async function fetchMeal() {
            // console.log("wat is fetchMeal?", fetchMeal)
            setError(false);
            toggleLoading(true);

            try {
                const responseBalance = await axios.get(`https://api.spoonacular.com/recipes/${meal.id}/information?apiKey=${apiKey}&includeNutrition=true`);

                console.log('Wat is responseBalance?', responseBalance.data);
                setImageUrl(responseBalance.data.image);
                setDietTypes(responseBalance.data.diets);
                // console.log("Wat is setDietTypes?", setDietTypes)
                setCaloricBreakdown(responseBalance.data.nutrition.caloricBreakdown);
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

    return(

        <article className="meal-complete-container">

            <div className="meal-container">

                <h1 className="meal-title">{meal.title}</h1>
                <img className="meal-photo" src={imageUrl} alt="recipe" />

                <div className="meal-info">
                    <ul>
                        <li>Preparation time: {meal.readyInMinutes} minutes</li>
                        {/*<li>Diets: {dietTypes && dietTypes.map((dietType) => {*/}
                        {/*    return dietType*/}
                        {/*})}</li>*/}
                    </ul>

                    <ul>Caloric breakdown per meal:
                        <li>Percent protein: {caloricBreakdown.percentProtein}</li>
                        <li>Percent fat: {caloricBreakdown.percentFat}</li>
                        <li>Percent carbs: {caloricBreakdown.percentCarbs}</li>
                    </ul>
                    <a href={meal.sourceUrl}>show recipe</a>
                </div>

                {error && (<span className="wrong-error">Something went wrong!</span>)}

                {loading && (<span>Loading...</span>)}
            </div>
        </article>
    )
};

export default Balancemeal;