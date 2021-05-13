import React, { useState, useEffect } from 'react';
import axios from 'axios';
// import './Balancemeal.css';

const apiKey = '02105724086e470e88f525d3ba28227f'

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
        <article>

            <h1>{meal.title}</h1>
            <img src={imageUrl} alt="recipe" />
            <ul>
                <li>Preparation time: {meal.readyInMinutes} minutes</li>
                <li>Diets: {dietTypes && dietTypes.map((dietType) => {
                    return dietType
                })}</li>
            </ul>

            <ul>Caloric breakdown per meal:
                <li>Percent protein: {caloricBreakdown.percentProtein}</li>
                <li>Percent fat: {caloricBreakdown.percentFat}</li>
                <li>Percent carbs: {caloricBreakdown.percentCarbs}</li>
            </ul>
            <a href={meal.sourceUrl}>Go to the recipe</a>

            {error && (<span className="wrong-error">Something went wrong!</span>)}

            {loading && (<span>Loading...</span>)}


        </article>
    )
};

export default Balancemeal;