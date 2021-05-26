import React, { useContext } from 'react';
import { UserContext } from "../context/UserContext";
import './Profile.css';
import CategoryIntro from "../components/CategoryIntro";
import balance from "../assets/balance.jpg";
import workout from "../assets/workout.jpg";
import comfort from "../assets/comfort.jpg";
import clock from "../assets/clock.jpg";


function Profile() {
    const { user } = useContext(UserContext);
    console.log(user);


    return (
        <>
            <main className="categoryIntro-mainContainer">

                <CategoryIntro
                    picture={balance}
                    title="balance day"
                    info="As a rule, a healthy woman needs an average of 2,000 calories and a healthy man an average of 2,500 calories per day. Plan your daily menu based on calories."
                    url="/balanceday"
                />
                <CategoryIntro
                    picture={workout}
                    title="work-out day"
                    info="How much protein do I actually need after my workout? Plan your meals based on the protein, fat and carbs you need."
                    url="/workoutday"
                />

                <CategoryIntro
                    picture={clock}
                    title="no-time-for-cooking day"
                    info="After a long day at the office you wanna cook something quickly. Plan your meal based on the time you actually got."
                    url="/notimeforcookingday"
                />

                <CategoryIntro
                    picture={comfort}
                    title="comfort-food day"
                    info="Just enjoy! Comfort food - treat yourself, friends and family, to delicious, feel good food today!"
                    url="/comfortfoodday"
                />
                </main>
        </>
    );
}

export default Profile;