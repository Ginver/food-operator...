import React, { useState } from "react";
import axios from "axios";
import MealDataList from "../components/MealDataList";
import DietVariations from "../components/DietVariations";
import PageHeader from "../components/PageHeader";
import comfort from "../assets/comfort.jpg";
import "./ComfortFoodDay.css";
import ShowRecBtn from "../components/ShowRecBtn";
import BackToBtn from "../components/BackToBtn";

const apiKey = process.env.REACT_APP_RECIPE_API_KEY

function ComfortFoodDay() {

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
                <BackToBtn className="overview-button" label="back to overview" path="/overview"/>
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

            <ShowRecBtn showGetMealData={getComfortMealData} results={totalResults}/>

            {comfortDayMeal && <MealDataList meallistData={comfortDayMeal}/>}

            {error && (<span className="error-msg">Oops, something went wrong!</span>)}
            {loading && (<span className="loading-balance">Loading...</span>)}

            <div className="overview-btn">
                <BackToBtn className="overview-button" label="back to overview" path="/overview"/>
            </div>
        </div>
    )
};

export default ComfortFoodDay;