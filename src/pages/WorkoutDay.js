import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import ProteinPerKilogram from "../helpers/ProteinPerKilogram";
import DietVariations from "../components/DietVariations";
import MealDataList from "../components/MealDataList";
import PageHeader from '../components/PageHeader';
import DishTypes from "../components/DishTypes";
import workout from "../assets/yoga.jpg";
import "./WorkoutDay.css";
import ShowRecBtn from "../components/ShowRecBtn";

const apiKey = process.env.REACT_APP_RECIPE_API_KEY

function WorkoutDay() {
    const history = useHistory();

    const [workoutDayMeal, setWorkoutDayMeal] = useState('');
    const [protein, setProtein] = useState(0);
    const [kilogram, setKilogram] = useState(0);
    const [dishTypes, setDishTypes] = useState('');
    const [diet, setDiet] = useState('vegetarian');
    const [totalResults, setTotalResults] = useState(0);

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    function handleChange(e) {
        setProtein(e.target.value)
    };

    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            getWorkoutMealData();
        }
    }

    function handleChangeP(e) {
        setKilogram(e.target.value)
    }

    function keyPressCheckP(e) {
        if (e.keyCode === 13) {
            setKilogram(e.target.value);
        }
    }

    async function getWorkoutMealData() {
        // console.log("getWorkoutMealData?", getWorkoutMealData);
        setError(false);
        toggleLoading(true);

        try {
            const resultWorkout = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${dishTypes}&number=3&minProtein=${protein}&diet=${diet}&sort=random`);
            // console.log("Wat is resultWorkout?", resultWorkout);
            setWorkoutDayMeal(resultWorkout.data);
            setTotalResults(resultWorkout.data.totalResults);

            toggleLoading(false);

        } catch (e) {
            console.error(e);
            setError(true);
            toggleLoading(false);
        }
    }

    return (
        <div className="workout-container">

            <div className="overview-btn">
                <button
                    className="overview-button"
                    type="button"
                    onClick={() => history.push('/overview')}
                >
                    back to overview
                </button>
            </div>

            <PageHeader picture={workout} title="work-out day"/>

            <section className="workout-day">

                <div className="protein-calculator">
                    <h3>How much protein do I actually need after my workout?</h3>
                    <h6>*Our calculation is based on 1.5g protein / kg / 3 meals a day</h6>

                    <div className="prot-calc">
                        <label>your weight:</label>
                        <input
                            className="input-weight"
                            type="text"
                            placeholder="kg"
                            onChange={handleChangeP}
                            onKeyUp={keyPressCheckP}
                        />
                        <p> = {ProteinPerKilogram(kilogram)} g protein/meal</p>
                    </div>

                    <div className="prot-input">
                    <label>your protein:</label>
                        <input
                            className="input-protein"
                            type="text"
                            placeholder="0.0g"
                            onChange={handleChange}
                            onKeyDown={keyPressCheck}
                        />
                    </div>

                </div>
            </section>

            <DietVariations setDietType={setDiet}/>

            <DishTypes setTypeOfDish={setDishTypes}/>

                <ShowRecBtn
                    showGetMealData={getWorkoutMealData}
                    results={totalResults}/>

            {workoutDayMeal && <MealDataList meallistData={workoutDayMeal}/>}

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

export default WorkoutDay;