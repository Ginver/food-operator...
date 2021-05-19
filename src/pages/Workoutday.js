import React, { useState } from "react";
import axios from "axios";
import ProteinPerKilogram from "../helpers/ProteinPerKilogram";
import DietVariations from "../components/DietVariations";
import MealDataList from "../components/MealDataList";
import { useHistory } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import workout from '../assets/dumbbell.png';

const apiKey = process.env.REACT_APP_RECIPE_API_KEY


function Workoutday() {
    const [workoutDayMeal, setWorkoutDayMeal] = useState('');
    const [protein, setProtein] = useState(0);
    const [kilogram, setKilogram] = useState(0);

    const [diet, setDiet] = useState('vegetarian');
    const [totalResults, setTotalResults] = useState(0);

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory();

    // value changes when this function is called
    function handleChange(e) {
        setProtein(e.target.value)
    };

    // als je dus op enter drukt wordt de request uitgevoerd
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
            const resultWorkout = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=main course&number=3&minProtein=${protein}&diet=${diet}&sort=random`);
            console.log("Wat is resultWorkout?", resultWorkout);
            setWorkoutDayMeal(resultWorkout.data);

            // console.log('Wat is resultWorkout?', resultWorkout.data.totalResults);
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

            <PageHeader icon={workout} title="work-out day" />

            <div className="toProfile-button">
                <button className="action-button"
                        type="button"
                        onClick={() => history.push('/profile')}
                >
                    back to overview
                </button>
            </div>

            <section className="workout-day">
                <h1>workout day</h1>
                <h3>How much protein do we actually need?</h3>
                <p>The amount of protein that the human body requires daily is dependent on many conditions including overall energy intake, growth of the individual, and physical activity level. It is often estimated based on body weight, as a percentage of total caloric intake (10-35%), or based on age alone. 0.8g/kg of body weight is a commonly cited recommended dietary allowance (RDA). This value is the minimum recommended value to maintain basic nutritional requirements, but consuming more protein, up to a certain point, may be beneficial, depending on the sources of the protein.
                    The recommended range of protein intake is between 0.8 g/kg and 1.8 g/kg of body weight, dependent on the many factors listed above. People who are highly active, or who wish to build more muscle should generally consume more protein. Some sources2 suggest consuming between 1.8 to 2 g/kg for those who are highly active. The amount of protein a person should consume, to date, is not an exact science, and each individual should consult a specialist, be it a dietitian, doctor, or personal trainer, to help determine their individual needs.</p>

                <div className="protein-calculator">

                    <label>How much protein do I need after my workout?
                        <input
                            type="number"
                            placeholder="your weight in kg"
                            onChange={handleChangeP}
                            // setting up the protein change> handleChange function
                            onKeyUp={keyPressCheckP}
                            // when user presses enter it will also pull the request
                        />
                        <h6>*Our calculation is based on 1.2g protein / kg / 3 meals a day</h6>
                    </label>

                    <p>Your protein / meal: {ProteinPerKilogram(kilogram)} g</p>
                </div>

                <input
                    type="number"
                    placeholder="protein (e.g. 30g)"
                    onChange={handleChange}
                    // setting up the protein change> handleChange function
                    onKeyDown={keyPressCheck}
                    // when user presses enter it will also pull the request
                />
            </section>

            <DietVariations setDiettype={setDiet}/>

            <button
                className="recipes-button"
                onClick={getWorkoutMealData}>
                show recipes
            </button>

            <h6>* if you don't like this recipe, hit the button again!</h6>

            <div className="totalresults">
                <p>there are {totalResults} results</p>
            </div>


            {workoutDayMeal && <MealDataList meallistData={workoutDayMeal}/>}

            {error && (<span className="error-msg">Oops, something went wrong!</span>)}

            {loading && (<span className="loading-balance">Loading...</span>)}

            <div className="toProfile-button">
                <button className="action-button"
                        type="button"
                        onClick={() => history.push('/profile')}
                >
                    back to overview
                </button>
            </div>

        </div>
    )
};

export default Workoutday;