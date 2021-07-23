import React, { useState, useContext } from 'react';
import axios from 'axios';
import BalanceMealList from "../components/BalanceMealList";
import DietVariations from "../components/DietVariations";
import { useHistory } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import balance from "../assets/balance.jpg";
import { UserContext } from "../context/UserContext";
import './BalanceDay.css';
import ShowRecBtn from "../components/ShowRecBtn";

const apiKey = process.env.REACT_APP_RECIPE_API_KEY

function BalanceDay() {
    const { user } = useContext(UserContext);
    console.log(user)

    const history = useHistory();

    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(1500);
    const [diet, setDiet] = useState('');

    const [error, setError] = useState(false);
    const [loading, toggleLoading] = useState(false);

    function handleChange(e) {
        setCalories(e.target.value)
    };

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
            // console.log('Wat is result.data?', result.data);
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

            {user !== null &&
            <div className="overview-btn">
                <button
                    className="overview-button"
                    type="button"
                    onClick={() => history.push('/overview')}
                >
                    back to overview
                </button>
            </div>
            }

            {user === null &&
            <div className="overview-btn">
                <button
                    className="overview-button"
                    type="button"
                    onClick={() => history.push('/')}
                >
                    back to home
                </button>
            </div>
            }

            <PageHeader picture={balance} title="balance day"/>

            <div className="balance-content">

                <input
                    type="text"
                    placeholder="calories (e.g. 1500kcal)"
                    onChange={handleChange}
                    onKeyDown={keyPressCheck}
                />
            </div>

            <DietVariations setDietType={setDiet}/>

            <ShowRecBtn showGetMealData={getMealData}/>

            {/*<div className="showRec-cont">*/}
            {/*    <button*/}
            {/*        className="recipes-button"*/}
            {/*        onClick={getMealData}*/}
            {/*        >*/}
            {/*        show recipes*/}
            {/*    </button>*/}
            {/*    <h6>* if you don't like these recipes, hit the button again!</h6>*/}
            {/*</div>*/}

            {mealData && <BalanceMealList mealListData={mealData}/>}

            {error && (<span className="error-msg">Oops, something went wrong!</span>)}

            {loading && (<span className="loading-balance">Loading...</span>)}

            {user === null &&
                <>
                    <div className="see-more-unit">
                        <h3>sign up to see more!</h3>
                        <div className="home-button">
                            <button
                                className="action-button"
                                type="button"
                                onClick={() => history.push('/signup')}
                            >
                                sign up
                            </button>
                        </div>
                    </div>
                </>
            }

            {user !== null &&
            <div className="overview-btn">
                <button
                    className="overview-button"
                    type="button"
                    onClick={() => history.push('/overview')}
                >
                    back to overview
                </button>
            </div>
            }

            {user === null &&
            <div className="overview-btn">
                <button
                    className="overview-button"
                    type="button"
                    onClick={() => history.push('/')}
                >
                    back to home
                </button>
            </div>
            }

        </div>
    )
};

export default BalanceDay;