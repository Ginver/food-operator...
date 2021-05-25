import React from 'react';
import { useHistory } from 'react-router-dom';
import PageHeader from "../components/PageHeader";

function Home() {
    const history = useHistory();
    return (
        <>
            <div className="home-container">

                <PageHeader title="home"/>

                <button className="planner-button balance-button" onClick={() => history.push('/balanceday')}>balance day</button>

                <h4>let's get you started!</h4>


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