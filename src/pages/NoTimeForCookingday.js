import React, { useState } from 'react';
import axios from 'axios';
import MealDataList from '../components/MealDataList';
import DietVariations from "../components/DietVariations";
import { useHistory } from "react-router-dom";
// import './NoTimeForCookingday.css'
// import PageHeader from '../components/PageHeader';
// import workout from '../assets/bicycle.svg';

const apiKey = '02105724086e470e88f525d3ba28227f'

function NoTimeForCookingday() {
    const [noTimeMealData, setNoTimeMealData] = useState(null);
    const [minutes, setMinutes] = useState(30);
    const [diet, setDiet] = useState('vegetarian');
    const [totalResults, setTotalResults] = useState(0);

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory();

    // value changes when this function is called
    function handleChange(e) {
        setMinutes(e.target.value)
    };

    // als je dus op enter drukt wordt de request uitgevoerd
    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            getMealData();
        }
    }

    async function getMealData() {
        // console.log("getmealdata?", getMealData);
        setError(false);
        toggleLoading(true);

        try {
            const resultNotime = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=main course&number=3&maxReadyTime=${minutes}&diet=${diet}&sort=random`);
            // console.log("Wat is resultNotime?", resultNotime);
            setNoTimeMealData(resultNotime.data);

            // console.log('Wat is resultNotime?', resultNotime.data.totalResults);
            setTotalResults(resultNotime.data.totalResults);

            toggleLoading(false);

        } catch (e) {
            console.error(e);
            setError(true);
            toggleLoading(false);
        }
    }

    return (
        <div className="no-time-container">

            {/*<PageHeader icon={notime} title="no-time-for-cooking day" />*/}

            <button className="action-button"
                    type="button"
                    onClick={() => history.push('/profile')}
            >
                back to overview
            </button>

            <section className="no-time-day">
                <h1>no-time-for-cooking day</h1>
                <input
                    type="number"
                    placeholder="minutes (e.g. 30)"
                    onChange={handleChange}
                    // setting up the minutes change> handleChange function
                    onKeyDown={keyPressCheck}
                    // when user presses enter it will also pull the request
                />
            </section>

            <DietVariations setDiettype={setDiet}/>

            <button
                className="action-button"
                onClick={getMealData}>
                show recipes
            </button>

            <div className="totalresults">
                <p>There are {totalResults} results.</p>
                <p>If you don't like this recipe, hit the button again!</p>
            </div>

            {noTimeMealData && <MealDataList meallistData={noTimeMealData}/>}

            {error && (<span className="error-balance">Oops, something went wrong!</span>)}

            {loading && (<span className="loading-balance">Loading...</span>)}

            <button className="action-button"
                    type="button"
                    onClick={() => history.push('/profile')}
            >
                back to overview
            </button>

        </div>
    )
}

export default NoTimeForCookingday;