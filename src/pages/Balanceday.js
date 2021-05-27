import React, { useState } from 'react';
import axios from 'axios';
import BalanceMealList from "../components/BalanceMealList";
import DietVariations from "../components/DietVariations";
import { useHistory } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import balance from "../assets/balance.jpg";
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
            <div className="overview-btn">

                <button className="overview-button"
                        type="button"
                        onClick={() => history.push('/')}
                >
                    back to home
                </button>
            </div>
            <PageHeader picture={balance} title="balance day"/>

            <div className="balance-content">

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
                    type="text"
                    placeholder="calories (e.g. 1500kcal)"
                    onChange={handleChange}
                    onKeyDown={keyPressCheck}
                />
            </div>

            <DietVariations setDiettype={setDiet}/>

            <div className="showRec-cont">
            <button
                className="recipes-button"
                onClick={getMealData}
                >
                show recipes
            </button>
            <h6>* if you don't like these recipes, hit the button again!</h6>
            </div>

            {mealData && <BalanceMealList mealListData={mealData}/>}

            {error && (<span className="error-msg">Oops, something went wrong!</span>)}

            {loading && (<span className="loading-balance">Loading...</span>)}

            <div className="see-more-unit">
                <h3>sign up to see more!</h3>
                <div className="home-button">

                    <button className="action-button"
                            type="button"
                            onClick={() => history.push('/signup')}
                    >
                        sign up
                    </button>
                </div>

            </div>
            <div className="overview-btn">
            <button className="overview-button"
                type="button"
                onClick={() => history.push('/')}
            >
                back to home
            </button>
            </div>
        </div>
    )
}

export default Balanceday;