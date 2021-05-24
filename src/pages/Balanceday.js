import React, { useState } from 'react';
import axios from 'axios';
import Balancemeallist from "../components/Balancemeallist";
import DietVariations from "../components/DietVariations";
import { useHistory } from "react-router-dom";
import PageHeader from '../components/PageHeader';
import balance from '../assets/law-scale.png';

const apiKey = process.env.REACT_APP_RECIPE_API_KEY


function Balanceday() {

    const [mealData, setMealData] = useState(null);
    const [calories, setCalories] = useState(0);
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
            // console.log('Wat is result.data?', result.data.meals);
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

            <PageHeader icon={balance} title="balance day" />

            <button className="action-button"
                type="button"
                onClick={() => history.push('/profile')}
            >
                back to overview
            </button>

            <section className="balance-day">

                <p>In de regel heeft een gezonde vrouw gemiddeld 2.000 calorieën en een gezonde man gemiddeld 2.500 calorieën per dag nodig.
                    Het grote probleem is dat de meeste vrouwen en mannen niet gemiddeld zijn en het ligt nog aan meer criteria hoeveel calorieen je nodig hebt per dag.
                    Zie hieronder een tabel voor mannen en vrouwen:

                    Vrouwen (14-18 jaar)
                    Zittend beroep: 1800
                    Licht actief: 2000
                    Actief: 2400

                    Mannen (14-18 jaar)
                    Zittend beroep: 2200
                    Licht actief: 2400-2800
                    Actief: 2800-3200

                    Vrouwen (19-30 jaar)
                    Zittend beroep: 2000
                    Licht actief: 2000-2200
                    Actief: 2400

                    Mannen (19-30 jaar)
                    Zittend beroep: 2400
                    Licht actief: 2600-2800
                    Actief: 2800-3000

                    Vrouwen (31-50 jaar)
                    Zittend beroep: 1800
                    Licht actief: 2000
                    Actief: 2200

                    Mannen (31-50 jaar)
                    Zittend beroep: 2200
                    Licht actief: 2400-2600
                    Actief: 2800-3000

                    Vrouwen (51+)
                    Zittend beroep: 1600
                    Licht actief: 1800
                    Actief: 2000-2200

                    Mannen (51+)
                    Zittend beroep: 2000
                    Licht actief: 2200-2400
                    Actief: 2400-2800

                </p>
                <input
                    type="number"
                    placeholder="calories (e.g. 2000)"
                    onChange={handleChange}
                    // setting up the calory change> handleChange function
                    onKeyDown={keyPressCheck}
                    // when user presses enter it will also pull the request
                />
            </section>

            <DietVariations setDiettype={setDiet}/>

            <button
                className="recipes-button"
                onClick={getMealData}
                // onClick={() => toggleResetDiet(true)}
                >
                show recipes
            </button>

            <h6>* if you don't like this recipe, hit the button again!</h6>

            {mealData && <Balancemeallist mealListData={mealData}/>}

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
}

export default Balanceday;