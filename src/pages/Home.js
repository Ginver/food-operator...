import React, {useContext} from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from "../components/PageHeader";
import CategoryIntro from "../components/CategoryIntro";
import balance from "../assets/balance.jpg";
import "./Home.css";
// import workout from "../assets/workout.jpg";
// import clock from "../assets/clock.jpg";
// import comfort from "../assets/comfort.jpg";
import { UserContext } from "../context/UserContext";

function Home() {
    const { logoutFunc, user } = useContext(UserContext);
    console.log(user);

    const history = useHistory();

    return (
        <>
            <div className="home-container">
                <PageHeader title="home"/>
                <h3>Quick and easy search for recipes  adapted to your activities and the dynamics of the day.</h3>
                <h4>Sign up to get access to other categories to plan personalized meal plans based on your food preferences and schedule!</h4>

                <main>
                    <CategoryIntro
                        picture={balance}
                        title="balance day"
                        info="Plan your daily menu based on calories."
                        url="/balanceday"
                    />
                    {/*<CategoryIntro*/}
                    {/*    picture={workout}*/}
                    {/*    title="work-out day"*/}
                    {/*    info="How much protein do I actually need after my workout?"*/}
                    {/*/>*/}
                    {/*<CategoryIntro*/}
                    {/*    picture={clock}*/}
                    {/*    title="no-time-for-cooking day"*/}
                    {/*    info="Plan your meal based on the time you actually got."*/}
                    {/*/>*/}
                    {/*<CategoryIntro*/}
                    {/*    picture={comfort}*/}
                    {/*    title="comfort-food day"*/}
                    {/*    info="Just enjoy and make a delicious, feel good food today!" />*/}
                </main>

                <h3>sign up to see more!</h3>

                <div className="home-button">
                    <button className="action-button"
                        type="button"
                        onClick={() => history.push('/signin')}
                    >
                        log in
                    </button>
                    <button className="action-button"
                        type="button"
                        onClick={() => history.push('/signup')}
                    >
                        register
                    </button>
                </div>

            </div>
        </>
    );
}

export default Home;