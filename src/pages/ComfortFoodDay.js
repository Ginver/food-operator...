import React, { useState } from "react";
import axios from "axios";
import MealDataList from "../components/MealDataList";
import DietVariations from "../components/DietVariations";
import { useHistory } from "react-router-dom";
import PageHeader from "../components/PageHeader";
import comfort from "../assets/comfort.jpg";
import "./ComfortFoodDay.css";

const apiKey = process.env.REACT_APP_RECIPE_API_KEY

function ComfortFoodDay() {
    const history = useHistory();

    const [comfortDayMeal, setComfortDayMeal] = useState('');
    const [calories, setCalories] = useState('3000')
    const [dishType, setDishType] = useState('main course');
    const [diet, setDiet] = useState('');

    const [totalResults, setTotalResults] = useState(0);

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    async function getComfortMealData() {
        // console.log("getComfortMealData?", getComfortMealData);
        setError(false);
        toggleLoading(true);

        try {
            const resultComfort = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${dishType}&targetCalories=${calories}&number=3&diet=${diet}&sort=random`);
            // console.log("Wat is resultComfort?", resultComfort);
            setComfortDayMeal(resultComfort.data);
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

            <div className="overview-btn">
                <button
                    className="overview-button"
                    type="button"
                    onClick={() => history.push('/overview')}
                >
                    back to overview
                </button>
            </div>

            <PageHeader picture={comfort} title="comfort-food day"/>

            <section className="comfort-content">
                <h3>Just enjoy</h3>
                <p>Enjoy a nice, warm, delicious meal or if you feel like have a dessert as a treat!</p>
            </section>

            <DietVariations setDietType={setDiet}/>

            <div className="dessert-checkbox">
                <input
                       type="checkbox"
                       id="dessert-checkbox"
                       name="dessert-checkbox"
                       value={dishType}
                       onChange={() => {
                           dishType && dishType === 'main course' ? setDishType('dessert') : setDishType('main course')
                       }}
                />
                <label htmlFor="dessert-checkbox">show only desserts</label>
            </div>


            <div className="showRec-cont">

                <button
                    className="recipes-button"
                    onClick={getComfortMealData}
                >
                    show recipes
                </button>
                <h6>* if you don't like these recipes, hit the button again!</h6>

                <p>there are <strong>{totalResults}</strong> results:</p>

            </div>

            {comfortDayMeal && <MealDataList meallistData={comfortDayMeal}/>}

            {error && (<span className="error-msg">Oops, something went wrong!</span>)}
            {loading && (<span className="loading-balance">Loading...</span>)}

            <div className="overview-btn">
                <button
                    className="overview-button"
                    type="button"
                    onClick={() => history.push('/overview')}
                >
                    back to overview
                </button>
            </div>
        </div>
    )
};

export default ComfortFoodDay;