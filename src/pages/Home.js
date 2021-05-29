import React from 'react';
import { useHistory } from 'react-router-dom';
import CategoryIntro from "../components/CategoryIntro";
import balance from "../assets/balance_shade.jpg";
import workout from "../assets/yoga_shade.jpg";
import clock from "../assets/clock_shade.jpg";
import comfort from "../assets/comfort_shade.jpg";
import "./Home.css";

function Home() {

    const history = useHistory();

    return (
        <>
            <div className="home-container">

                <div className="home-text">
                <h1>Quick and easy search for recipes<br /> adapted to your activities and the dynamics of the day.</h1>
                    <h2>Sign up to get access to other categories to plan personalized meal plans based on your food preferences and schedule!</h2>
                <h3>try out balance day!</h3>
                </div>

                    <CategoryIntro
                        picture={balance}
                        title="balance day"
                        info="Plan your daily menu based on calories!"
                        url="/balanceday"
                    />

                    <div className="see-more-unit">
                        <h3>sign up to see more!</h3>
                        <div className="home-button">
                            <button className="action-button"
                                    type="button"
                                    onClick={() => history.push('/signin')}
                            >
                                sign in
                            </button>
                            <button className="action-button"
                                    type="button"
                                    onClick={() => history.push('/signup')}
                            >
                                sign up
                            </button>
                        </div>
                    </div>

                    <CategoryIntro
                        picture={workout}
                        title="work-out day"
                        info="How much protein do I actually need if I workout?"
                    />
                    <CategoryIntro
                        picture={clock}
                        title="no-time-for-cooking day"
                        info="Plan your meal based on the time you actually got!"
                    />
                    <CategoryIntro
                        picture={comfort}
                        title="comfort-food day"
                        info="Treat yourself and enjoy!" />

            </div>
        </>
    );
}

export default Home;