import React, { useState } from 'react';
import axios from 'axios';
import Balancemeallist from "../components/Balancemeallist";
import DietVariations from "../components/DietVariations";
import { useHistory } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import './Balanceday.css';

const apiKey = process.env.REACT_APP_RECIPE_API_KEY


function Balanceday() {

    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(1500);
    const [diet, setDiet] = useState('');

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    const history = useHistory();

    // value changes when this function is called
    function handleChange(e) {
        setCalories(e.target.value)
    };

    // als je dus op enter drukt wordt de request uitgevoerd
    function keyPressCheck(e) {
        if (e.keyCode === 13) {
            getMealData();
        }
    }

    async function getMealData() {
        // console.log("getMealdata?", getMealData);
        setError(false);
        toggleLoading(true);

        try {
            const result = await axios.get(`https://api.spoonacular.com/mealplanner/generate?apiKey=${apiKey}&timeFrame=day&targetCalories=${calories}&diet=${diet}`);
            // console.log('Wat is result?', result);
            console.log('Wat is result.data?', result.data);
            setMealData(result.data);

            toggleLoading(false);

        } catch (e) {
            console.error(e);
            setError(true);
            toggleLoading(false);
        }
    }

    return (
        <div className="balance-container">

            <PageHeader title="balance day"/>

            <div className="overview-btn">
                <button className="overview-button"
                        type="button"
                        onClick={() => history.push('/profile')}
                >
                    back to overview
                </button>
            </div>

            <div className="balance-content">
                <p>As a rule, a healthy woman needs an average of 2,000 calories and a healthy man an average of 2,500 calories per day.<br />
                The problem is that most women and men are not average and it depends even more on how many calories you need per day.<br />
                    To help out we made an overview:</p>
                <table className="tableOfCalory">
                    <tr><td></td><td>age</td><td>office job</td><td>moderate active</td><td>active</td></tr>
                    <tr><td>female</td><td>14-18</td><td>1800</td><td>2000</td><td>2400</td></tr>
                    <tr><td>female</td><td>19-30</td><td>2000</td><td>2000-2200</td><td>2400</td></tr>
                    <tr><td>female</td><td>age: 31-50</td><td>1800</td><td>2000</td><td>2200</td></tr>
                    <tr><td>female</td><td>age: 51+</td><td>1600</td><td>1800</td><td>2000-2200</td></tr>
                    <tr><td>male</td><td>age: 14-18</td><td>2200</td><td>2400-2800</td><td>2800-3200</td></tr>
                    <tr><td>male</td><td>age: 19-30</td><td>2400</td><td>2600-2800</td><td>2800-3000</td></tr>
                    <tr><td>male</td><td>age: 31-50</td><td>2200</td><td>2400-2600</td><td>2800-3000</td></tr>
                    <tr><td>male</td><td>age: 51+</td><td>2000</td><td>2200-2400</td><td>2400-2800</td></tr>
                </table>

                <input
                    type="number"
                    placeholder="calories (e.g. 2000)"
                    onChange={handleChange}
                    // setting up the calory change> handleChange function
                    onKeyDown={keyPressCheck}
                    // disabled={calories < 0}
                    // when user presses enter it will also pull the request
                />
            </div>

            <DietVariations setDiettype={setDiet}/>

            <div className="showRec-cont">
            <button
                className="recipes-button"
                onClick={getMealData}
                // onClick={() => toggleResetDiet(true)}
                >
                show recipes
            </button>
            <h6>* if you don't like these recipes, hit the button again!</h6>
            </div>

            {mealData && <Balancemeallist mealListData={mealData}/>}

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

export default Balanceday;