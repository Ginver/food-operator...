import React, { useState } from 'react';
import axios from 'axios';
import MealDataList from '../components/MealDataList';
import DietVariations from "../components/DietVariations";
import { useHistory } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import DishTypes from "../components/DishTypes";
import notime from "../assets/clock.jpg"
import "./NoTimeForCookingday.css";

const apiKey = process.env.REACT_APP_RECIPE_API_KEY


function NoTimeForCookingday() {
    const [noTimeMealData, setNoTimeMealData] = useState(null);
    const [minutes, setMinutes] = useState(20);
    const [diet, setDiet] = useState('');
    const [totalResults, setTotalResults] = useState(0);
    const [dishTypes, setDishTypes] = useState('main course');

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
            getNoTimeData();
        }
    }

    async function getNoTimeData() {
        // console.log("getmealdata?", getMealData);
        setError(false);
        toggleLoading(true);

        try {
            const resultNotime = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?apiKey=${apiKey}&type=${dishTypes}&number=3&maxReadyTime=${minutes}&diet=${diet}&sort=random`);
            // console.log("Wat is resultNotime?", resultNotime);
            setNoTimeMealData(resultNotime.data);
            // console.log("what is setNoTimeMealData?", resultNotime.data)
            setTotalResults(resultNotime.data.totalResults);
            // console.log('Wat is resultNotime?', resultNotime.data.totalResults);

            toggleLoading(false);

        } catch (e) {
            console.error(e);
            setError(true);
            toggleLoading(false);
        }
    }

    return (
        <div className="no-time-container">

            <div className="overview-btn">
                <button className="overview-button"
                        type="button"
                        onClick={() => history.push('/profile')}
                >
                    back to overview
                </button>
            </div>

            <PageHeader picture={notime} title="no-time-for-cooking day" />

            <section className="noTime-input">
                <label>How much time do you have for cooking?</label>
                <input className="input-minutes"
                    type="text"
                    placeholder="e.g. 20 minutes"
                    onChange={handleChange}
                    onKeyDown={keyPressCheck}
                />
            </section>

            <DietVariations setDiettype={setDiet}/>
            <DishTypes setTypeOfDish={setDishTypes}/>

            <div className="showRec-cont">
                <button
                    className="recipes-button"
                    onClick={getNoTimeData}
                >
                    show recipes
                </button>
                <h6>* if you don't like these recipes, hit the button again!</h6>

                    <p>there are <strong>{totalResults}</strong> results:</p>

            </div>

            {noTimeMealData && <MealDataList meallistData={noTimeMealData}/>}

            {error && (<span className="error-msg">Oops, something went wrong!</span>)}
            {loading && (<span className="loading-balance">Loading...</span>)}

            <div className="overview-btn">
                <button className="overview-button"
                        type="button"
                        onClick={() => history.push('/profile')}
                >
                    back to overview
                </button>
            </div>

        </div>
    )
}

export default NoTimeForCookingday;