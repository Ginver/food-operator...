import React, { useState } from "react";
import axios from "axios";
import MealDataList from "../components/MealDataList";
import DietVariations from "../components/DietVariations";
import { useHistory } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import comfort from '../assets/pacman.png';

const apiKey = process.env.REACT_APP_RECIPE_API_KEY


function Comfortfoodday() {
    const [comfortDayMeal, setComfortDayMeal] = useState('');
    const [calories, setCalories] = useState('2500')
    const [dishType, setDishType] = useState('main course');
    const [diet, setDiet] = useState('');

    const [totalResults, setTotalResults] = useState(0);

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory();

    async function getComfortMealData() {
        // console.log("getComfortMealData?", getComfortMealData);
        setError(false);
        toggleLoading(true);

        try {
            const resultComfort = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${dishType}&targetCalories=${calories}&number=3&diet=${diet}&sort=random`);
            // console.log("Wat is resultComfort?", resultComfort);
            setComfortDayMeal(resultComfort.data);

            // console.log('Wat is resultComfort total?', resultComfort.data.totalResults);
            setTotalResults(resultComfort.data.totalResults);

            toggleLoading(false);

        } catch (e) {
            console.error(e);
            setError(true);
            toggleLoading(false);
        }
    }


    return (
        <div className="comfort-container">

            <PageHeader icon={comfort} title="comfort-food day" />

            <button className="action-button"
                    type="button"
                    onClick={() => history.push('/profile')}
            >
                back to overview
            </button>

            <section className="comfort-day">

                <h1>comfort-food day</h1>
                <h3>Just enjoy</h3>
                <p>Enjoy of a nice, warm, delicious meal or if you feel like just have a dessert as a treat!</p>
            </section>

            <DietVariations setDiettype={setDiet}/>

            <label htmlFor="dessert-checkbox">Just wanna have a dessert</label>

            <input className="dessert-checkbox"
                   type="checkbox"
                   id="dessert-checkbox"
                   name="dessert-checkbox"
                   value={dishType}
                   // checked={setDishType('dessert')}
                   onChange={() => {
                       dishType && dishType === 'main course' ? setDishType('dessert') : setDishType('main course')
                   }}
            />

            <button
                className="recipes-button"
                onClick={getComfortMealData}>
                show recipes
            </button>

            <h6>* if you don't like this recipe, hit the button again!</h6>

            <div className="totalresults">
                <p>there are {totalResults} results</p>

            </div>

            {comfortDayMeal && <MealDataList meallistData={comfortDayMeal}/>}

            {error && (<span className="error-msg">Oops, something went wrong!</span>)}

            {loading && (<span className="loading-balance">Loading...</span>)}

            <button className="action-button"
                    type="button"
                    onClick={() => history.push('/profile')}
            >
                back to overview
            </button>
        </div>
    )
};

export default Comfortfoodday;